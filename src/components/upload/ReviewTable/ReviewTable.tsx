import { Tooltip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRecoilValue } from 'recoil';
import { checkedTranastionsAtom, getUnCheckedTransactionList } from 'state';
import { Catgeory } from './Catgeory';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { theme } from 'theme';

type Props = {}

export function ReviewTable({ }: Props) {
    const transactionList = useRecoilValue(getUnCheckedTransactionList);
    const transactions = useRecoilValue(checkedTranastionsAtom);

    if (!transactionList.length) {
        return (
            <Typography>No Data</Typography>
        )
    }

    return (
        <TableContainer style={{
            maxHeight: '100%',
            padding: theme.spacing(1)
        }} component={Paper}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>id</TableCell> */}
                        <TableCell>
                            <Typography variant='h6'>Date</Typography>
                        </TableCell>
                        <TableCell>
                            <Tooltip title="wether the transaction is checked or unchecked">
                                <Typography align='center' variant='h6'>Status</Typography>
                            </Tooltip>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h6'>Debit</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h6'>Narrative</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h6'>Type</Typography>
                        </TableCell>
                        <TableCell width={300}>
                            <Typography align='right' variant='h6'>Category</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionList.map(row => {
                        const checkedTransaction = transactions[row.id!]
                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell align='center'>{
                                    checkedTransaction
                                        ? <PriceCheckIcon />
                                        : <></>
                                }</TableCell>
                                <TableCell>{row.debit}</TableCell>
                                <TableCell>{row.narrative}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>
                                    <Catgeory category={checkedTransaction?.category || row.category || ''} id={row.id!} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
