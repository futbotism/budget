import { useRecoilValue } from 'recoil'
import { getCheckedTransactionList } from 'state'

function Analysis() {
  const transactions = useRecoilValue(getCheckedTransactionList)
  return (
    <main>
      {transactions.map(expense => <p key={expense.id}>{expense.narrative}</p>)}
    </main>
  )
}

export default Analysis
