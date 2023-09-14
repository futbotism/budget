import { useRecoilValue } from 'recoil'
import { ExpensesAtom } from 'state/transactoins'

function Analysis() {
  const expenses = useRecoilValue(ExpensesAtom)
  return (
    <main>
      {expenses.map(expense => <p key={expense.id}>{expense.narrative}</p>)}
    </main>
  )
}

export default Analysis
