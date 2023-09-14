import { atom } from 'recoil'
import { Transaction } from './interface';

export const tranastionsAtom = atom<Record<string, Transaction>>({
    key: 'transactions',
    default: {},
  });
  