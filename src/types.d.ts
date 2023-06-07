type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type Forecast = {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

type AirPollution = {
  coord: {
    lon: number;
    lat: number;
  };
  list: {
    main: {
      aqi: number;
    };
  }[];
};

type GeoLocation = {
  lat: number;
  lon: number;
  name: string;
  state: string;
  country: string;
};

type GeoLocationReverse = {
  lat: number;
  lon: number;
  name: string;
  local_names: {
    ascii: string;
    en: string;
    feature_name: string;
    feature_name_en: string;
  };
  country: string;
  state: string;
};

type DateOptions = {
  weekday: "long";
  year: "numeric";
  month: "long";
  day: "numeric";
  timeZone: "UTC";
};

type TimeOptions = {
  timeZone: "UTC";
  hour: "numeric";
  minute: "numeric";
};
