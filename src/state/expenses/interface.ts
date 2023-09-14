import { Catgeories } from "types";

export interface Transaction {
    category?: Catgeories,
    debit: string,
    type: string,
    date: string,
    narrative: string,
}