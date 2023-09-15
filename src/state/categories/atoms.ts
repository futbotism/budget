import { atom } from 'recoil'
import { Category } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const categoryAtom = atom<Category[]>({
  key: 'categories',
  default: [],
});
