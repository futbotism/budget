import { atom } from 'recoil'

export const authAtom = atom<string>({
    key: 'auth',
    default: '',
  });
  