import { atom, selector } from "recoil";

export const cityState = atom<GeoLocation | null>({
  key: "cityState",
  default: null,
});

export const citiesState = atom<GeoLocation[]>({
  key: "citiesState",
  default: [],
});

export const cityQuery = selector<GeoLocation | null>({
  key: "cityQuery",
  get: ({ get }) => {
    const city = get(cityState);
    if (!city) return null;
    return city;
  },
});

export const citiesQuery = selector<GeoLocation[]>({
  key: "citiesQuery",
  get: ({ get }) => {
    const cities = get(citiesState);
    return cities;
  },
});
