import { useRecoilState } from "recoil";
import { tranastionsAtom } from "./atoms";
import { Transaction } from "./interface";
import { Catgeories } from "types";

export function useTransactions() {

    const [transactionsAtom, setTransactionsAtom] = useRecoilState(tranastionsAtom)

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