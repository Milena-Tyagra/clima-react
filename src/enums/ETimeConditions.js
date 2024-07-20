// 20240720090418
// https://www.weatherapi.com/docs/weather_conditions.json

import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun } from "@phosphor-icons/react";

export const ETimeConditions = {
  1000: {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: <Sun size={96} />,
    class: "good-day"
  },
  1003: {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: <Cloud size={96} />,
    class: "good-day"
  },
  1006: {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: <Cloud size={96} />,
    class: "good-day"
  },
  1009: {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: <Cloud size={96} />,
    class: "good-day"
  },
  1030: {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: <CloudSun size={96} />,
    class: "good-day"
  },
  1063: {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1066: {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1069: {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1072: {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1087: {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: <CloudLightning size={96} />,
    class: "rain-day"
  },
  1114: {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1117: {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1135: {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: <CloudFog size={96} />,
    class: "rain-day"
  },
  1147: {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: <CloudFog size={96} />,
    class: "rain-day"
  },
  1150: {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1153: {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1168: {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1171: {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1180: {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1183: {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1186: {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1189: {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1192: {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1195: {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1198: {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1201: {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1204: {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1207: {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1210: {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1213: {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1216: {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1219: {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1222: {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1225: {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1237: {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1240: {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1243: {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1246: {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: <CloudRain size={96} />,
    class: "rain-day"
  },
  1249: {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1252: {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1255: {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1258: {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1261: {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1264: {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1273: {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: <CloudLightning size={96} />,
    class: "rain-day"
  },
  1276: {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: <CloudLightning size={96} />,
    class: "rain-day"
  },
  1279: {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
  1282: {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: <CloudSnow size={96} />,
    class: "snow-day"
  },
};
