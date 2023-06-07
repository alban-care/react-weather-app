import { atom, selector } from "recoil";
import { getWeatherByCoordinate } from "../api";
import { cityState } from "./city";

export const weatherState = atom<Weather | null>({
  key: "weatherState",
  default: null,
});

export const weatherQuery = selector<Weather | null>({
  key: "weatherQuery",
  get: async ({ get }) => {
    const { lat, lon } = get(cityState);
    if (!lat || !lon) return null;
    const weather = await getWeatherByCoordinate(lat, lon);
    return weather;
  },
});
