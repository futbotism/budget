import { useRecoilValue } from 'recoil'
import { getCheckedTransactionList } from 'state'
import { getAnalysisList } from './analysis.selector'

function Analysis() {
  const transactions = useRecoilValue(getCheckedTransactionList)
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <main>
      {JSON.stringify(analysis)}
    </main>
  )
}

export default Analysis

// lysis.map(([yearId, years]) => {
//   return <div key={yearId}>
//     debugger
//     {years.map(months => {
//       return <div>
//         {months.map(days => {
//           return <div>
//             {days.total}
//           </div>
//         })}
//       </div>
//     })}
//   </div>
// })}