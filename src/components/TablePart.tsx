import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  FirstPage,
  LastPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';

interface LocationState {
  state: {
    data: any[]; // [headers, ...rows]
  };
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div style={{ flexShrink: 0, marginLeft: theme.spacing(2.5) }}>
      <IconButton onClick={handleFirstPage} disabled={page === 0}>
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBack} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
}

const TablePart: React.FC = () => {
  const location = useLocation() as LocationState;
  const navigate = useNavigate();
  const data = location.state?.data;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (!data) {
      alert('No data to preview.');
      navigate('/');
    }
  }, [data, navigate]);

  const handleDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'combined_result.csv');
    link.click();
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!data) return null;

  const emptyRows =
    rowsPerPage > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length + 1) : 0;

  return (
    <div className="h-full pt-[16vh] p-8 w-full flex flex-col items-center">
      <div className="flex justify-end w-[90%] pb-6">
        <Button
          variant="contained"
          size="large"
          onClick={handleDownload}
          sx={{ fontSize: '16px', fontWeight: '600', fontFamily: "sans-serif" }}
          className='bg-gradient-to-r from-[#314b9e] via-[#a0358c] to-[#ce2d2d]'
        >
          Download CSV
        </Button>
      </div>

      <TableContainer component={Paper} sx={{
        maxHeight: 380, maxWidth: '90%', overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '2px',
          height: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#aaa',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f0f0f0',
        },
      }}>
        <Table stickyHeader aria-label="data preview table">
          <TableHead>
            <TableRow>
              {data[0].map((header: string, idx: number) => (
                <TableCell
                  key={idx}
                  sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', position: 'sticky', top: 0, zIndex: 1 }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(1).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data.slice(1)
            ).map((row: any[], rowIndex: number) => (
              <TableRow key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <TableCell key={colIndex}>{cell ?? ''}</TableCell>
                ))}
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={data[0].length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="w-full max-w-[90%] sticky bottom-0 bg-white shadow-md z-10 border-t-[1px] border-t-gray-200">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          count={data.length - 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          component="div"
        />
      </div>

    </div>
  );
};

export default TablePart;
