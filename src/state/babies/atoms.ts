import { atom } from 'recoil'
import { BabyEvents } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const babyEventsAtom = atom<BabyEvents[]>({
  key: 'babyEvents',
  default: [],
});
