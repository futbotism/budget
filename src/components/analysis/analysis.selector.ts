import { selector } from "recoil";
import { checkedTranastionsAtom, getCheckedTransactionList } from "state";
import { DateTime } from "luxon";

export const getAnalysis = selector({
    key: 'getAnalysis',
    get: ({ get }) => {
        const transactions = get(getCheckedTransactionList)

        transactions.forEach(transaction => {
            
        })

        return transactions;
    }
});