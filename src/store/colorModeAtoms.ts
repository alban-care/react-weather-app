import { atom } from "recoil";

export const colorModeState = atom<"light" | "dark">({
  key: "colorModeState",
  default: "light",
});
