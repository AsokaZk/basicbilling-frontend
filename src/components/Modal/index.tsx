import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import SelectCategory from '../Select';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const categories = [
    {
        value: 'WATER',
        label: 'WATER',
    },
    {
        value: 'ELECTRICITY',
        label: 'ELECTRICITY',
    },
    {
        value: 'SEWER',
        label: 'SEWER',
    }
];

type Props = {
    handleSubmit: (data: {}) => void;
};
export default function BasicModal({ handleSubmit }: Props) {
    const [open, setOpen] = React.useState(false);
    const [valid, setValid] = React.useState(false);
    const [period, setPeriod] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeSelect = (category: string) => {
        setCategory(category);
    };

    const handleCreate = () => {
        handleSubmit({ category, period });
        setPeriod('');
        setCategory('');
        handleClose();
    }
    const reg: RegExp = /^\d{4}(0[0-9]|1[0-2])$/;

    return (
        <div>
            <Button variant="contained" size='large' onClick={handleOpen}>Create</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create billing
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { mt: 3, width: 300 },
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-controlled"
                            sx={{ mr: 2 }}
                            type='number'
                            label="Period"
                            inputProps={{
                                pattern: "^(19|20)\d{2}(0[1-9]|1[0-2])$"
                            }}
                            value={period}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const input = event.target.value;
                                if (period.length < 6 || input.length < 6) {
                                    setValid(reg.test(input));
                                    setPeriod(input);
                                }
                            }}
                        />
                        <SelectCategory handleChangeSelect={handleChangeSelect} data={categories} />
                    </Box>
                    <Box justifyContent={'end'} sx={{ display: 'flex', mt: 2 }}>
                        <Button variant="contained" size='large' disabled={!(valid && category != '')} onClick={handleCreate}>Create</Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}