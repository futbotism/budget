import { selector } from "recoil";
import { tranastionsAtom } from "./atoms";

export const getTransactionList = selector({
    key: 'transactionList',
    get: ({get}) => {
        const transactions = get(tranastionsAtom)
        return Object.values(transactions)
    }
  });
  