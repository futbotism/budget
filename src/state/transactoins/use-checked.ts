import { useSetRecoilState } from "recoil";
import { checkedTranastionsAtom } from "./atoms";
import { Transaction } from "./interface";

export function useChecked() {
  const setTransactions = useSetRecoilState(checkedTranastionsAtom)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addRows = (data: Transaction[]) => {
    const url = 'https://sheetdb.io/api/v1/ppx4v32es5kzo?sheet=data';
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
    fetch('https://sheetdb.io/api/v1/ppx4v32es5kzo?sheet=data&sort_by=date')
      .then((response) => response.json())
      .then((data: Transaction[]) => setTransactions(data
        .reduce((previous: any, current) => {
          if (current.id) {
            previous[current.id] = current
          }
          return previous
        }, {})
      ))
  }

  return {
    addRows,
    getRows
  }
}