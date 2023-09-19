import { selector } from "recoil";
import { uncheckedTranastionsAtom, checkedTranastionsAtom } from "./atoms";

export const getUnCheckedTransactionList = selector({
  key: 'unCheckedTransactionList',
  get: ({ get }) => {
    return Object.values(get(uncheckedTranastionsAtom))
  }
});

export const getCheckedTransactionList = selector({
  key: 'checkedTransactionList',
  get: ({ get }) => {
    return Object.values(get(checkedTranastionsAtom))
  }
});
