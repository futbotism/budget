import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRecoilValue } from 'recoil';
import { getTransactionList } from 'state';
import { Catgeory } from './Catgeory';

type Props = {}

export function ReviewTable({}: Props) {
    const transactionList = useRecoilValue(getTransactionList);

    if (!transactionList.length) {
        return (
            <Typography>No Data</Typography>
        )
    }

    return (
        <TableContainer style={{
            maxHeight: '100%'
        }} component={Paper}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>id</TableCell> */}
                        <TableCell>date</TableCell>
                        <TableCell>debit</TableCell>
                        <TableCell>narrative</TableCell>
                        <TableCell>type</TableCell>
                        <TableCell width={300}>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionList.map(row => <TableRow key={row.id}>
                        {/* <TableCell>{row.id}</TableCell> */}
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.debit}</TableCell>
                        <TableCell>{row.narrative}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>
                            <Catgeory category={row.category || ''} id={row.id!}/>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
