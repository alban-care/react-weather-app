import { atom, selector } from "recoil";

export const cityState = atom<GeoLocation>({
  key: "cityState",
  default: { lat: 0, lon: 0, name: "", country: "", state: "" },
});

export const citiesState = atom<GeoLocation[]>({
  key: "citiesState",
  default: [],
});

export const cityQuery = selector<GeoLocation>({
  key: "cityQuery",
  get: ({ get }) => {
    const city = get(cityState);
    if (!city) return { lat: 0, lon: 0, name: "", country: "", state: "" };
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
