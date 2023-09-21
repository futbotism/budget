import { selector } from "recoil";
import { categoryAtom } from "./atoms";
import { Category } from "./interface";

export const getCategoiresRecord = selector<Record<string, Category>>({
    key: 'getCategoiresRecord',
    get: ({ get }) => {
      return get(categoryAtom).reduce((prev, curr) => {
        prev[curr.name] = curr
        return prev
      }, {} as Record<string, Category>)
    }
  });
  