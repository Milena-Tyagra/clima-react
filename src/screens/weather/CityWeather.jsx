import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { ArrowLeft, CloudSun, Moon, SealWarning, Sun } from "@phosphor-icons/react";

import { Title } from "../../components/title/Title";
import { WeatherPrincipalData } from "./components/weatherPrincipalData/WeatherPrincipalData";
import { WeatherDayData } from "./components/weatherDayData/WeatherDayData";
import { WeatherTimeData } from "./components/WeatherTimeData";

import { getWeather } from "../../service/apis";
import { ECities } from "../../enums/ECities";
import { ETimeConditions } from "../../enums/ETimeConditions";
import { displayMessage } from "../../helpers/messages";

export const CityWeather = () => {
  const { city_code } = useParams();
  const navigate = useNavigate();

  const [principalData, setPrincipalData] = useState({});
  const [dayData, setDayData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  const [weatherClass, setWetherClass] = useState("original");
  const [errorMessage, setErrorMessage] = useState(null);

  const [showScrean, setShowScrean] = useState(false);

  const city = Object.values(ECities).find(
    (city_obj) => city_obj.code == city_code
  );

  const formatPrincipalData = (data) => {
    const hour = DateTime.now().toFormat("hh");
    const principal_data = {
      temp: parseInt(data.hour[parseInt(hour)].temp_c),
      max_temp: parseInt(data.day.maxtemp_c),
      min_temp: parseInt(data.day.mintemp_c),
      text: data.day.condition.text,
      icon: data.day.condition.code,
    };

    setPrincipalData(principal_data);
    setWetherClass(ETimeConditions[principal_data.icon]?.class ?? "original");
  };

  const formatDayData = (data) => {
    const dawn_index = 3;
    const morning_index = 9;
    const afternoon_index = 15;
    const night_index = 21;

    const day_data = [
      {
        label: displayMessage("DAWN"),
        icon: <CloudSun size={45} weight="light" />,
        data: parseInt(data[dawn_index].temp_c),
      },
      {
        label: displayMessage("MORNING"),
        icon: <Sun size={45} weight="light" />,
        data: parseInt(data[morning_index].temp_c),
      },

      {
        label: displayMessage("AFTERNOON"),
        icon: <CloudSun size={45} weight="light" />,
        data: parseInt(data[afternoon_index].temp_c),
      },
      {
        label: displayMessage("NIGHT"),
        icon: <Moon size={45} weight="light" />,
        data: parseInt(data[night_index].temp_c),
      },
    ];

    setDayData(day_data);
  };
  const formatTimeData = (data) => {
    const time_data = [
      {
        label: displayMessage("WIND_SPEED"),
        data: `${data.day.maxwind_kph} m/s`,
      },
      {
        label: displayMessage("SUNRISE"),
        data: data.astro.sunrise,
      },

      {
        label: displayMessage("SUNSET"),
        data: data.astro.sunset,
      },
      {
        label: displayMessage("HUMIDITY"),
        data: `${data.day.avghumidity}%`,
      },
    ];

    setTimeData(time_data);
  };

  const getCityWeather = async () => {
    try {
      const city_name = city?.label;
      const date = DateTime.now().toFormat("yyyy/MM/dd");
      const result = await getWeather(city_name, date);
      formatPrincipalData(result.forecast.forecastday[0]);
      formatDayData(result.forecast.forecastday[0].hour);
      formatTimeData(result.forecast.forecastday[0]);

      setShowScrean(true);
    } catch (error) {
      console.log(error);
      setErrorMessage(displayMessage("ERROR_ON_CONSULT"));
    } finally {
    }
  };

  useEffect(() => {
    getCityWeather();
  }, []);
  return (
    <div
      className={`${weatherClass} w-full h-full flex flex-col items-center justify-center p-5 gap-7`}
    >
      {showScrean && (
        <>
          <ArrowLeft
            size={35}
            className="absolute top-4 left-3 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <Title title={city?.label} subtitle={principalData.text} />
          <WeatherPrincipalData data={principalData} />
          <WeatherDayData data={dayData} />
          <WeatherTimeData data={timeData} />
        </>
      )}
      {errorMessage && (
        <>
          <SealWarning size={96} weight="thin" color="white"/>
          <span className="text-white">{errorMessage}</span>
        </>
      )}
    </div>
  );
};
