# React Weather App

Build a weather app with react and Weather API

## Resources

- Current Weather Data [API doc](https://openweathermap.org/current)

## API Routes

With Geographical coordinates (latitude, longitude) :

> `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

With city name :

> `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

With city name and country code :

> `https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}`

With city name, state code and country code :

> `https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}`

## Example of API Response

```json
{
  "coord": {
    "lon": 139,
    "lat": 35
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.52,
    "feels_like": 278.99,
    "temp_min": 280.15,
    "temp_max": 283.71,
    "pressure": 1016,
    "humidity": 93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  "clouds": {
    "all": 2
  },
  "dt": 1560350192,
  "sys": {
    "type": 3,
    "id": 2019346,
    "message": 0.0065,
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  },
  "timezone": 32400,
  "id": 1851632,
  "name": "Shuzenji",
  "cod": 200
}
```

## Example of API Error Response

```json
{
  "cod": "404",
  "message": "city not found"
}
```

## Examples of API Parameters

- `q` city name, state code and country code divided by comma, use ISO 3166 country codes
- `id` city ID
- `lat` and `lon` coordinates of the location of your interest
- `zip` zip code
- `appid` your unique API key (you can always find it on your account page under the "API key" tab)
- `units` standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. [API doc](https://openweathermap.org/current#data)
- `lang` You can use the lang parameter to get the output in your language. [API doc](https://openweathermap.org/current#multi)
- `callback` JSONP callback name. [API doc](https://openweathermap.org/current#jsonp)
- `mode` You can use the mode parameter to switch between JSON and XML format. [API doc](https://openweathermap.org/current#parameter)
