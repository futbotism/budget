import { css } from '@mui/material';
import { Container } from 'components/shared';
import Papa from 'papaparse';
import { useRecoilValue } from 'recoil';
import { Transaction } from 'state';
import { docInfoAtom } from 'state/expenses';
import { useTransactions } from 'state/transactions/use-transactions';
import { theme } from 'theme';
import Actions from './Actions';
import { ReviewTable } from './ReviewTable';

const styles = css({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateRows: 'auto 1fr',
  height: '100%',
  justifyItems: 'stretch',
  alignItems: 'start'
})

interface WestpacDataRow {
  ['Balance']: string,
  ['Bank Account']: string,
  ['Categories']: string,
  ['Credit Amount']: string,
  ['Date']: string,
  ['Debit Amount']: string,
  ['Narrative']: string,
  ['Serial']: string
}



function Upload() {
  // State to store parsed data
  const { setTransactions } = useTransactions()

  const docInfo = useRecoilValue(docInfoAtom)
  console.log(docInfo)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse<WestpacDataRow>(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {

        // Iterating data to get column name and their values
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setTransactions(results.data.reduce((prev: any, row) => {
          const transaction: Transaction = {
            date: row['Date'],
            debit: row['Debit Amount'],
            narrative: row['Narrative'],
            type: row['Categories'],
          }
          const id = btoa(JSON.stringify(transaction))
          prev[id] = {
            id,
            date: row['Date'],
            debit: row['Debit Amount'],
            narrative: row['Narrative'],
            type: row['Categories'],
          }
          return prev;
        }, {}))
      },
    });

  }

  return (
    <Container>
      <div css={styles}>
        <Actions onChange={onChange} />
        <ReviewTable/>
      </div>
    </Container>
  )
}

export default Upload
