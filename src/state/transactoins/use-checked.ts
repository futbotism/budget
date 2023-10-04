import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkedTranastionsAtom } from "./atoms";
import { Transaction } from "./interface";
import { sheetIdAtom } from "state/auth";

export function useChecked() {
  const setTransactions = useSetRecoilState(checkedTranastionsAtom)
  const sheetId = useRecoilValue(sheetIdAtom)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addRows = (data: Transaction[]) => {
    const url = `https://sheetdb.io/api/v1/${sheetId}?sheet=data`;
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
    fetch(`https://sheetdb.io/api/v1/${sheetId}?sheet=data&sort_by=date`)
      .then((response) => response.json())
      .then((data: Transaction[]) => {
        
        if (!data.length) {
          return {}
        }

        return setTransactions(data
          .reduce((previous: any, current) => {
            if (current.id) {
              previous[current.id] = current
            }
            return previous
          }, {})
      )})
  }

  return {
    addRows,
    getRows
  }
}