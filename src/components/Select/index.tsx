import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

type Props = {
    handleChangeSelect: (category: string) => void;
    data: { value: string, label: string }[];
};
export default function SelectCategory({ handleChangeSelect, data }: Props) {
    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
        handleChangeSelect(event.target.value as string);
    };
    return (
        <div>
            <Box sx={{ minWidth: 140 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                    >
                        {data.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}