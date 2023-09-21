import { DateTime } from "luxon";
import { selector } from "recoil";
import { Transaction, getCheckedTransactionList } from "state";


interface Day {
    transactions: Transaction[]
    total: number
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
                    total: analysis[yearKey][monthKey][weekNumberKey][weekDayKey].total += Number(transaction.debit)
                }
                : {
                    total: Number(transaction.debit),
                    transactions: [transaction]
                }

        })
        console.log(analysis)
        return analysis;
    }
});
