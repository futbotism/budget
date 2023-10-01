import { DateTime } from "luxon";
import { selector } from "recoil";
import { Transaction, categoryAtom, getCheckedTransactionList } from "state";


export interface DayI {
    transactions: Transaction[]
    total: number
    categoryTotals: Record<string, number>
}

export const getAnalysisList = selector({
    key: 'getAnalysisList',
    get: ({ get }) => Object.entries(get(getAnalysis))
        .map(([value, b]) => {
            return {
                id: value,
                months: Object.entries(b)
                    .map(([val, z]) => {
                        return {
                            id: val,
                            weeks: Object.entries(z)
                                .map(([vv, qw]) => {
                                    return {
                                        id: vv,
                                        days: qw
                                    }
                                })
                        }
                    })
            }
        })
})


export const getAnalysis = selector({
    key: 'getAnalysis',
    get: ({ get }) => {
        const transactions = get(getCheckedTransactionList)
        const cateories = get(categoryAtom)
        const analysis: Record<string, Record<string, Record<string, Record<string, Day>>>> = {};

        transactions.forEach(transaction => {
            const date = DateTime.fromISO(transaction.date);
            
            const weekDayKey = `${date.weekdayShort}`
            const weekNumberKey = `${date.weekNumber}`
            const monthKey = `${date.monthShort}`
            const yearKey = `${date.year}`

            analysis[yearKey] = analysis[yearKey] ?? {}
            analysis[yearKey][monthKey] = analysis[yearKey][monthKey] ?? {}
            analysis[yearKey][monthKey][weekNumberKey] = analysis[yearKey][monthKey][weekNumberKey] ?? {}
            analysis[yearKey][monthKey][weekNumberKey][weekDayKey] = analysis[yearKey][monthKey][weekNumberKey][weekDayKey] 
                ? {
                    transactions: [
                        ...analysis[yearKey][monthKey][weekNumberKey][weekDayKey].transactions,
                        transaction
                    ],
                    categoryTotals: {
                        ...analysis[yearKey][monthKey][weekNumberKey][weekDayKey].categoryTotals,
                        [transaction.category as string]: analysis[yearKey][monthKey][weekNumberKey][weekDayKey].categoryTotals[transaction.category] + Number(transaction.debit)
                    },
                    total: analysis[yearKey][monthKey][weekNumberKey][weekDayKey].total += Number(transaction.debit)
                }
                : {
                    total: Number(transaction.debit),
                    categoryTotals: cateories.reduce((prev, curr) => {
                        prev[curr.name] = 0
                        return prev
                      }, {} as Record<string, number>),
                    transactions: [transaction]
                }

        })
        console.log(analysis)
        return analysis;
    }
});
