import { atom } from 'recoil'
import { Transaction } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ExpensesAtom = atom<Transaction[]>({
  key: 'Expenses',
  default: [],
});
  
export const uncheckedTranastionsAtom = atom<Record<string, Transaction>>({
  key: 'transactions',
  default: {},
});
