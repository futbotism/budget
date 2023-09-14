import { useSetRecoilState } from "recoil";
import { ExpensesAtom } from "./atoms";
import { Transaction } from "./interface";

export function useChecked() {
  const setTransactions = useSetRecoilState(ExpensesAtom)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addRows = (data: Transaction[]) => {
    debugger
    const url = 'https://sheetdb.io/api/v1/ppx4v32es5kzo';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then((response) => response.json())
      .then(json => getRows());

  }

  const getRows = () => {
    fetch('https://sheetdb.io/api/v1/ppx4v32es5kzo')
    .then((response) => response.json())
      .then((data) => setTransactions(data))
  }

  return {
    addRows,
    getRows
  }
}