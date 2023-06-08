import { atom } from "recoil";

export const weatherState = atom<Weather>({
  key: "weatherState",
  default: undefined,
});

export const forecastState = atom<Forecast>({
  key: "forecastState",
  default: undefined,
});
