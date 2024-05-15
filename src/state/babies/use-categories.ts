import { useSetRecoilState } from "recoil";
import { babyEventsAtom } from "./atoms";

export function useBabies() {
  const setTransactions = useSetRecoilState(babyEventsAtom)

  const getbabies = () => {
    fetch('https://sheetdb.io/api/v1/uc0eugq7v44dm?sheet=Form Responses 1')
    .then((response) => response.json())
      .then((data) => setTransactions(data))
  }

  return {
    getbabies
  }
}