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
    IconButton,
    Button,
    type SelectChangeEvent,
    FormControl,
    InputLabel,
    Select,
    MenuItem
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

const importanceOptions = [
    'Business Meaning Entity',
    'Business Meaning Attribute',
    'Entity Name',
    'Attribute Name'
];

export default function EntityTableWithDialog() {
    const [open, setOpen] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [openCustom, setOpenCustom] = useState(false);
    const [importance, setImportance] = useState<string[]>(['', '', '', '']);

    const handleOpenDialog = (desc: string, title: string) => {
        setSelectedDescription(desc);
        setDialogTitle(title);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedDescription('');
        setDialogTitle('');
    };

    const renderField = (text: string, label: string) => {
        return renderTruncatedDescription({
            text,
            onClick: () => handleOpenDialog(text, label),
            wordLimit: 12
        });
    };

    const handleCustomOpen = () => {
        setOpenCustom(true);
    };
    const handleCustomClose = () => {
        setOpenCustom(false);
    };

    const handleImportanceChange = (index: number, event: SelectChangeEvent) => {
        const newImportance = [...importance];
        newImportance[index] = event.target.value;
        setImportance(newImportance);
    };

    return (
        <>
            <div className="pt-[18vh] flex flex-col justify-center items-center p-10">
                <div className="flex justify-end items-center w-full pb-3">
                    <Button variant="contained" color="primary" onClick={handleCustomOpen}>
                        Customize
                    </Button>
                </div>
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
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{renderField(row.businessMeaningEntity, "Business Meaning Entity")}</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #ccc' }}>{renderField(row.businessMeaningAttribute, "Business Meaning Attribute")}</TableCell>
                                    <TableCell align='center'>
                                        {renderField(row.description, "Description")}
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
                    <p className='font-serif font-bold text-[#1976d2]'>{dialogTitle}</p>
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

            {/* Customize Modal */}
            <BootstrapDialog
                onClose={handleCustomClose}
                aria-labelledby="customized-dialog-title"
                open={openCustom}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} className='flex items-center justify-between'>
                    <p className='font-serif font-bold text-[#1976d2]'>Importance Configuration</p>
                    <IconButton
                        aria-label="close"
                        onClick={handleCustomClose}
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
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {importance.map((value, index) => (
                            <FormControl key={index} fullWidth sx={{ minWidth: 200 }}>
                                <InputLabel id={`importance-select-${index}`}>{`Importance ${index + 1}`}</InputLabel>
                                <Select
                                    labelId={`importance-select-${index}`}
                                    id={`importance-select-${index}`}
                                    value={value}
                                    onChange={(e) => handleImportanceChange(index, e)}
                                    label={`Importance ${index + 1}`}
                                    fullWidth
                                >
                                    {importanceOptions
                                        .filter(option => !importance.includes(option) || importance[index] === option)
                                        .map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        ))}
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}
