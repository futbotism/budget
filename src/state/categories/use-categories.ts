import { useSetRecoilState } from "recoil";
import { categoryAtom } from "./atoms";

export function useCategories() {
  const setTransactions = useSetRecoilState(categoryAtom)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const addRows = (data: Category[]) => {
  //   debugger
  //   const url = 'https://sheetdb.io/api/v1/ppx4v32es5kzo';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ data })
  //   })
  //     .then((response) => response.json())
  //     .then(json => getCategories());
  // }

  const getCategories = () => {
    fetch('https://sheetdb.io/api/v1/ppx4v32es5kzo?sheet=category')
    .then((response) => response.json())
      .then((data) => setTransactions(data))
  }

  return {
    getCategories
  }
}