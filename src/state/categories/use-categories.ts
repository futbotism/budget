import { useSetRecoilState } from "recoil";
import { categoryAtom } from "./atoms";

export function useCategories() {
  const setTransactions = useSetRecoilState(categoryAtom)

  const getCategories = () => {
    fetch('https://sheetdb.io/api/v1/ppx4v32es5kzo?sheet=category')
    .then((response) => response.json())
      .then((data) => setTransactions(data))
  }

  return {
    getCategories
  }
}