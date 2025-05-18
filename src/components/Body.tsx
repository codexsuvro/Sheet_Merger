import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { processExcelFile } from '../utils/fileProcessor'; // Adjust path if needed

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Body: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [processedData, setProcessedData] = useState<any[] | null>(null);
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (!file) return;

        const validMimeTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ];

        const validExtensions = ['.xls', '.xlsx'];

        const hasValidExtension = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
        const hasValidMimeType = validMimeTypes.includes(file.type);

        if (!hasValidExtension || !hasValidMimeType) {
            alert('Only valid Excel files (.xls, .xlsx) are supported!');
            event.target.value = '';
            setSelectedFile(null);
            return;
        }

        setSelectedFile(file);
    };

    // Process file on selection
    useEffect(() => {
        if (selectedFile) {
            processExcelFile(selectedFile)
                .then((result) => {
                    setProcessedData(result);
                })
                .catch((err) => {
                    alert('Error processing file: ' + err.message);
                    setSelectedFile(null);
                });
        }
    }, [selectedFile]);

    const handleSubmit = () => {
        if (!processedData) {
            alert('No data processed.');
            return;
        }

        navigate('/preview', { state: { data: processedData } });
    };

    return (
        <div className="h-[88vh] pt-16 w-full flex flex-col gap-12 justify-center items-center">
            <div className="h-[280px] w-[500px] border-[#5151db] border-4 border-dashed rounded-3xl flex flex-col gap-5 justify-center items-center">
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className="h-[50px] w-[200px] px-8 py-4 text-2xl font-bold font-serif bg-gradient-to-r from-[#314b9e] via-[#a0358c] to-[#ce2d2d]"
                    sx={{ fontFamily: 'sans-serif', fontWeight: '700' }}
                >
                    Upload file
                    <VisuallyHiddenInput
                        type="file"
                        accept=".xls,.xlsx"
                        onChange={handleFileChange}
                        multiple={false}
                    />
                </Button>

                {selectedFile ? (
                    <p className="text-green-600 text-[16px] font-medium text-center">
                        <b>Selected File:</b> {selectedFile.name}
                    </p>
                ) : (
                    <p className="text-red-500 text-[13px] font-semibold text-center">
                        *Only .xls and .xlsx files are supported
                    </p>
                )}
            </div>
            {selectedFile ? (
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{ fontSize: '16px', fontWeight: '600' }}
                    disabled={!processedData}
                    className={`tracking-widest font-serif bg-gradient-to-r from-[#314b9e] via-[#a0358c] to-[#ce2d2d]`}
                >
                    Submit
                </Button>
            ) : (
            <></>
            )}
        </div>
    );
};

export default Body;
