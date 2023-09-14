import { useRecoilState } from "recoil";
import { uncheckedTranastionsAtom } from "./atoms";
import { Transaction } from "./interface";
import { Catgeories } from "types";

export function useUnchecked() {

    const [transactionsAtom, setTransactionsAtom] = useRecoilState(uncheckedTranastionsAtom)

    const setTransactions = (transactions: Record<string, Transaction>) => {
        setTransactionsAtom(transactions)
    }

    const updateTransactionCategory = (id: string, category: Catgeories) => {

        setTransactionsAtom({
            ...transactionsAtom,
            [id]: {
                ...transactionsAtom[id],
                category
            }
        })
    }

    return {
        setTransactions,
        updateTransactionCategory
    }
}