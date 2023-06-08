import { atom, selector } from "recoil";
import { getWeatherByCoordinate } from "../api";
import { cityState } from "./city";

export const weatherState = atom<Weather>({
  key: "weatherState",
  default: undefined,
});

export const weatherQuery = selector<Weather | undefined>({
  key: "weatherQuery",
  get: async ({ get }) => {
    const city = get(cityState);
    if (!city) return undefined;
    const { lat, lon } = city;
    const weather = await getWeatherByCoordinate(lat, lon);
    return weather;
  },
});
