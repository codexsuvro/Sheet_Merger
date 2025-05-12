// src/utils/fileProcessor.ts
import * as XLSX from 'xlsx';

export const processExcelFile = (file: File) => {
  return new Promise<any[]>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      if (!data) {
        reject(new Error('Failed to read the file.'));
        return;
      }

      try {
        const workbook = XLSX.read(data, { type: 'array' }); // Using 'array' for better compatibility with ArrayBuffer

        // Ensure there are at least two sheets
        if (workbook.SheetNames.length < 2) {
          reject(new Error('The file should have at least two sheets.'));
          return;
        }

        // Extract the first two sheets
        const sheet1 = workbook.Sheets[workbook.SheetNames[0]];
        const sheet2 = workbook.Sheets[workbook.SheetNames[1]];

        // Convert sheets to JSON format (header: 1 means the first row is treated as the header)
        const jsonSheet1: any[][] = XLSX.utils.sheet_to_json(sheet1, { header: 1 });
        const jsonSheet2: any[][] = XLSX.utils.sheet_to_json(sheet2, { header: 1 });

        // Ensure both sheets have data
        if (jsonSheet1.length === 0 || jsonSheet2.length === 0) {
          reject(new Error('One or both sheets are empty.'));
          return;
        }

        // Find common columns (headers) between both sheets
        const commonColumns = jsonSheet1[0].filter((header: string) => jsonSheet2[0]?.includes(header));

        if (!commonColumns || commonColumns.length === 0) {
          reject(new Error('No common columns found between the two sheets.'));
          return;
        }

        // Create a union of the rows based on common columns
        const combinedData = jsonSheet1.slice(1).map((row1: any[]) => {
          // Find corresponding row in sheet2
          const row2 = jsonSheet2.slice(1).find((r: any[]) =>
            commonColumns.every((col) =>
              row1[jsonSheet1[0].indexOf(col)] === r[jsonSheet2[0].indexOf(col)]
            )
          );

          // Merge values from both rows based on common columns
          return commonColumns.map((col) =>
            row1[jsonSheet1[0].indexOf(col)] || row2?.[jsonSheet2[0].indexOf(col)]
          );
        });

        resolve([commonColumns, ...combinedData]);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading the file.'));
    };

    // Use readAsArrayBuffer for compatibility
    reader.readAsArrayBuffer(file);
  });
};
