/**
 * @name getDateByLocale
 * @description Get the date based on the specified locale.
 * @param {number} dateUnix - The Unix date (e.g., 1627776000).
 * @param {string} locale - The locale of the date (e.g., "en-US").
 * @param {Object} options - The date formatting options.
 * @param {string} options.weekday - The format of the weekday (e.g., 'long', 'short', 'narrow').
 * @param {string} options.year - The format of the year (e.g., 'numeric', '2-digit').
 * @param {string} options.month - The format of the month (e.g., 'numeric', '2-digit', 'long', 'short', 'narrow').
 * @param {string} options.day - The format of the day (e.g., 'numeric', '2-digit').
 * @param {string} options.timeZone - The time zone (e.g., 'UTC', 'Europe/Paris').
 * @returns {string} The formatted date based on the specified locale and options.
 */
export const getDateByLocale = (
  dateUnix: number,
  locale: string,
  options: DateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }
): string => {
  const date = new Date(dateUnix * 1000);
  const formatter = new Intl.DateTimeFormat(locale, options);
  formatter.format(date);
  return date.toLocaleDateString(locale, options);
};

/**
 * @name getTimeByLocale
 * @description Get the time based on the specified locale.
 * @param {number} dateUnix - The Unix date (e.g., 1627776000).
 * @param {string} locale - The locale of the time (e.g., "en-US").
 * @param {Object} options - The time formatting options.
 * @param {string} options.timeZone - The time zone (e.g., 'UTC', 'Europe/Paris').
 * @param {string} options.hour - The format of the hour (e.g., 'numeric', '2-digit').
 * @param {string} options.minute - The format of the minutes (e.g., 'numeric', '2-digit').
 * @returns {string} The formatted time based on the specified locale and options.
 */
export const getTimeByLocale = (
  dateUnix: number,
  locale: string,
  options: TimeOptions = {
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
  }
): string => {
  const date = new Date(dateUnix * 1000);
  const formatter = new Intl.DateTimeFormat(locale, options);
  formatter.format(date);
  return date.toLocaleTimeString(locale, options);
};

/**
 * @name metersPerSecondToKilometersPerHour
 * @description Converts meters per second to kilometers per hour.
 * @param {number} mps - Meters per second (e.g., 10).
 * @returns {number} The equivalent value in kilometers per hour.
 */
export const metersPerSecondToKilometersPerHour = (mps: number): number => {
  return mps * 3.6;
};

/**
 * @name convertTemperatureBasedOnUnits
 * @description Converts the temperature based on the specified units.
 * @param {number} temp - The temperature (e.g., 10).
 * @param {string} units - The units (e.g., "standart", "metric", "imperial").
 * @returns {string} The formatted temperature based on the specified units.
 */
export const convertTemperatureBasedOnUnits = (
  temp: number,
  units = "metric"
) => {
  if (units === "standard") {
    const kelvin = Math.floor((temp * 9) / 5 - 459.67);
    return `${kelvin} K`;
  }
  if (units === "imperial") {
    const fahrenheit = Math.floor((temp * 9) / 5 + 32);
    return `${fahrenheit} °F`;
  }
  const celsius = Math.floor(temp);
  return `${celsius} °C`;
};

export const airQualityIndexToText = {
  en: {
    1: {
      text: "Good",
      color: "green",
      message:
        "Air quality is considered satisfactory, and air pollution poses little or no risk.",
    },

    2: {
      text: "Moderate",
      color: "yellow",
      message:
        "Air quality is acceptable. However, there may be a moderate health concern for a very small number of individuals, particularly those who are unusually sensitive to air pollution.",
    },
    3: {
      text: "Unhealthy for Sensitive Groups",
      color: "orange",
      message:
        "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
    },
    4: {
      text: "Unhealthy",
      color: "red",
      message:
        "Some members of the general public may experience health effects. Sensitive groups are likely to experience more serious effects.",
    },
    5: {
      text: "Very Unhealthy",
      color: "purple",
      message:
        "Health alert: The risk of health effects is increased for everyone. People with respiratory or heart diseases, the elderly, and children should avoid prolonged outdoor exertion.",
    },
    6: {
      text: "Hazardous",
      color: "maroon",
      message:
        "Health warning of emergency conditions: Everyone is more likely to be affected. All individuals should avoid outdoor physical activities.",
    },
  },
  fr: {
    1: {
      text: "Bon",
      color: "green",
      message:
        "La qualité de l'air est considérée comme satisfaisante et la pollution de l'air ne présente que peu ou pas de risque.",
    },
    2: {
      text: "Modéré",
      color: "yellow",
      message:
        "La qualité de l'air est acceptable. Cependant, il peut y avoir une préoccupation modérée pour la santé d'un très petit nombre de personnes, en particulier celles qui sont particulièrement sensibles à la pollution de l'air.",
    },
    3: {
      text: "Malsain pour les groupes sensibles",
      color: "orange",
      message:
        "Les membres des groupes sensibles peuvent ressentir des effets sur la santé. Le grand public est moins susceptible d'être affecté.",
    },
    4: {
      text: "Malsain",
      color: "red",
      message:
        "Certains membres du grand public peuvent ressentir des effets sur la santé. Les groupes sensibles sont susceptibles de ressentir des effets plus graves.",
    },
    5: {
      text: "Très malsain",
      color: "purple",
      message:
        "Alerte sanitaire: le risque d'effets sur la santé est accru pour tout le monde. Les personnes atteintes de maladies respiratoires ou cardiaques, les personnes âgées et les enfants doivent éviter les efforts prolongés à l'extérieur.",
    },
    6: {
      text: "Dangereux",
      color: "maroon",
      message:
        "Avertissement sanitaire de conditions d'urgence: tout le monde est plus susceptible d'être affecté. Tous les individus doivent éviter les activités physiques en extérieur.",
    },
  },
};
