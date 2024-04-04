import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Client } from '../../app/store/client-slice';
import { Button, Stack } from '@mui/material';


type Props = {
    data: Client[];
    handleOptions: (data: string) => void;
};
export default function ClientTable({ data, handleOptions }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align='center'>Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={row.id + index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" key={row.id + 'name'}>
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row" align='center' key={row.id + 'option'}>
                                <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
                                    <Button variant="contained" size="medium" onClick={(_) => handleOptions(row.id.toString())} >View Pending Bills</Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}