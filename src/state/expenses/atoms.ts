import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { atom } from 'recoil'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const docInfoAtom = atom<GoogleSpreadsheetWorksheet>({
    key: 'docInfo',
    default: undefined,
  });
  