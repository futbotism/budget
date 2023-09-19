import { useRecoilValue } from 'recoil'
import { getCheckedTransactionList } from 'state'
import { getAnalysis } from './analysis.selector'

function Analysis() {
  const transactions = useRecoilValue(getCheckedTransactionList)
  const analysis = useRecoilValue(getAnalysis)

  console.log(analysis)

  return (
    <main>
      {transactions.map(expense => <p key={expense.id}>{expense.narrative}</p>)}
    </main>
  )
}

export default Analysis
