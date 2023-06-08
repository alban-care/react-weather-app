const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_BASE_URL;
const CITY_BASE_URL = import.meta.env.VITE_OPEN_CITY_BASE_URL;

/**
 * @param lat Latitude, decimal (-90; 90).
 * @param lon Longitude, decimal (-180; 180).
 * @param units Units of measurement. standard, metric and imperial units are available.
 * @param lang Language (fr, en)
 * @returns {Promise<Weather>}
 */
export const getWeatherByCoordinate = async (
  lat: number,
  lon: number,
  units = "metric",
  lang = "en"
): Promise<Weather> => {
  const url = `${WEATHER_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (res) console.log("fetch weather by coordinate");
  const data = await res.json();
  return data;
};

/**
 * @param lat Latitude, decimal (-90; 90).
 * @param lon Longitude, decimal (-180; 180).
 * @param units Units of measurement. standard, metric and imperial units are available.
 * @param lang Language (fr, en)
 * @returns {Promise<Forecast>}
 */
export const getForecastByCoordinate = async (
  lat: number,
  lon: number,
  units = "metric",
  lang = "en"
): Promise<Forecast> => {
  const url = `${WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (res) console.log("fetch forecast by coordinate");
  const data = await res.json();
  return data;
};

/**
 * @param lat Latitude, decimal (-90; 90).
 * @param lon Longitude, decimal (-180; 180).
 * @returns {Promise<AirPollution>}
 */
export const getAirPollutionByCoordinate = async (
  lat: number,
  lon: number
): Promise<AirPollution> => {
  const url = `${WEATHER_BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (res) console.log("fetch air pollution by coordinate");
  const data = await res.json();
  return data;
};

/**
 * @param name City name
 * @param limit Limit of results
 * @returns
 */
export const getGeoLocationByCityName = async (
  name: string,
  limit = 5
): Promise<GeoLocation[]> => {
  const url = `${CITY_BASE_URL}/direct?q=${name}&limit=${limit}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (res) console.log("fetch geo location by city name");
  const data = await res.json();
  return data;
};

/**
 * @param lat Latitude, decimal (-90; 90).
 * @param lon Longitude, decimal (-180; 180).
 * @param limit Limit of results
 * @returns {Promise<GeoLocationReverse>}
 */
export const getGeoLocationByCoordinate = async (
  lat: number,
  lon: number,
  limit = 5
): Promise<GeoLocationReverse[]> => {
  const url = `${CITY_BASE_URL}/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${API_KEY}`;
  const res = await fetch(url);
  if (res) console.log("fetch geo location by coordinate");
  const data = await res.json();
  return data;
};
