import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Catgeory from './Catgeory';

type Props = {
    rows: any[],
    columns: any[]
}

export function ReviewTable({ rows, columns }: Props) {
    console.log(rows)
    return (
        <TableContainer style={{
            maxHeight: '100%'
        }} component={Paper}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => <TableRow>
                        {row.map((r: any) => <TableCell>{r}</TableCell>)}
                        <TableCell>
                            <Catgeory/>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
