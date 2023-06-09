import { atom, selector } from "recoil";

export const historyState = atom<GeoLocation[]>({
  key: "historyState",
  default: [],
});

export const historySelector = selector<GeoLocation[]>({
  key: "historySelector",
  get: ({ get }) => {
    const history = get(historyState);
    return history;
  },
});
