import { atom, selector } from 'recoil'

export const sheetIdAtom = atom<string>({
    key: 'sheetId',
    default: localStorage.getItem('sheetId') || '', //ppx4v32es5kzo
  });
  
  export const getIsAuthed = selector({
    key: 'getIsAuthed',
    get: ({ get }) => !!get(sheetIdAtom)
  });
  