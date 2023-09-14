import { Transaction } from "./interface";

export function useExpenses() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addRows = (rows: Transaction[]) => {
    const url = 'https://api.sheety.co/e1f9dba4b3df1b854717c48aca4fc8e2/budget/sheet1';
    const body = {
      sheet1: {
        rows
      }
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        console.log(json.sheet1);
      });

  }

  const getRows = () => {
    fetch('https://sheetdb.io/api/v1/ppx4v32es5kzo')
      .then(async (response) => {
        console.log(await response.json())
      })
      .then((data) => console.log(data))

  }

  return {
    addRows,
    getRows
  }
}