import { atom } from 'recoil'
import { Transaction } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkedTranastionsAtom = atom<Record<string, Transaction>>({
  key: 'checkedTranastionsAtom',
  default: {},
});
  
export const uncheckedTranastionsAtom = atom<Record<string, Transaction>>({
  key: 'uncheckedTranastionsAtom',
  default: {},
});
