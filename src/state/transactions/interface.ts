import { Catgeories } from "types";

export interface Transaction {
    id?: string,
    category?: Catgeories,
    debit: string,
    type: string,
    date: string,
    narrative: string,
  }