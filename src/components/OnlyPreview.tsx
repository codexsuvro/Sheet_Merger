import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    DialogTitle,
    DialogContent,
    Dialog,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { renderTruncatedDescription } from "../utils/helperFunctions";
import { sample_table_data } from "../sample/index.ts";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
    }
}));

export default function EntityTableWithDialog() {
    const [open, setOpen] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');

    const handleOpenDialog = (desc: string) => {
        setSelectedDescription(desc);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedDescription('');
    };

    return (
        <>
            <div className="pt-[18vh] flex justify-center items-center p-10">
                <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
                    <Table stickyHeader aria-label="entity table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-serif' align='center' sx={{ borderRight: '1px solid #ccc', backgroundColor: '#1976d2', color: '#fff', fontSize: '1rem' }}><strong>Entity Name</strong></TableCell>
                                <TableCell className='font-serif' align='center' sx={{ borderRight: '1px solid #ccc', backgroundColor: '#1976d2', color: '#fff', fontSize: '1rem' }}><strong>Attribute Name</strong></TableCell>
                                <TableCell className='font-serif' align='center' sx={{ borderRight: '1px solid #ccc', backgroundColor: '#1976d2', color: '#fff', fontSize: '1rem' }}><strong>Business Meaning Entity</strong></TableCell>
                                <TableCell className='font-serif' align='center' sx={{ borderRight: '1px solid #ccc', backgroundColor: '#1976d2', color: '#fff', fontSize: '1rem' }}><strong>Business Meaning Attribute</strong></TableCell>
                                <TableCell className='font-serif' align='center' sx={{ backgroundColor: '#1976d2', color: '#fff', fontSize: '1rem' }}><strong>Description</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sample_table_data.map((row: any) => (
                                <TableRow key={row.id} hover>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{row.entityName}</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{row.attributeName}</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{row.businessMeaningEntity}</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{row.businessMeaningAttribute}</TableCell>
                                    <TableCell align='center'>
                                        {renderTruncatedDescription({
                                            text: row.description,
                                            onClick: handleOpenDialog,
                                            wordLimit: 10
                                        })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* Custom Styled Dialog */}
            <BootstrapDialog
                onClose={handleCloseDialog}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} className='flex items-center justify-between'>
                    <p className='font-serif font-bold text-[#1976d2]'>Full Description</p>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseDialog}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 12,
                            color: theme.palette.grey[500],
                            '&:hover': {
                                backgroundColor: '#1976d2',
                                color: '#fff',
                            }
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom sx={{ whiteSpace: 'pre-wrap' }}>
                        {selectedDescription}
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}
