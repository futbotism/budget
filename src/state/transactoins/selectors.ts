import { selector } from "recoil";
import { uncheckedTranastionsAtom } from "./atoms";

export const getTransactionList = selector({
    key: 'transactionList',
    get: ({get}) => {
        return Object.values(get(uncheckedTranastionsAtom))
    }
  });
  