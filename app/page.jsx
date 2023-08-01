"use client";

import Aside from "@/components/Aside";
import styles from "./page.module.css";
import DaysContainer from "@/components/DaysContainer";
import InformationContainer from "@/components/InformationContainer";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

const apiKey = "e89d9cdccf22ff153a88820a76e6a116";
const urlApi = "https://api.openweathermap.org/data/";

const getWeather = (infoType, searchParams) => {
  const url = new URL(`${urlApi}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: apiKey });
  return fetch(url).then((response) => response.json());
};

const currentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
    visibility,
  } = data;

  const { main: details, icon } = weather[0];
  console.log(data);

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    deg,
    visibility,
    pressure,
  };
};

const formatToLocalTime = (secs, zone, format = "'Today . 'EEE, d LLL") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const forecastWeather = (data) => {
  let { timezone, daily } = data;
  console.log(daily);
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "cccc"),
      temp: d.temp.day,
      temp_max: d.temp.max,
      temp_min: d.temp.min,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily };
};

const newDataWeather = async (searchParam) => {
  const formattedCurrentWeather = await getWeather(
    "2.5/weather",
    searchParam
  ).then(currentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeather("3.0/onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParam.units,
  }).then(forecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [query, setQuery] = useState({ q: "helsinki" });
  const symbolUnit = units;

  const unitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await newDataWeather({ ...query, units }).then((data) => {
        setWeatherData(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        {weatherData && (
          <Aside
            weatherData={weatherData}
            localTime={formatToLocalTime}
            setQuery={setQuery}
            symbol={symbolUnit}
          />
        )}
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.section1}>
          <div className={styles.unitContainer}>
            <div className={styles.divUnits}>
              <button
                className={styles.unitButtonC}
                name="metric"
                onClick={unitsChange}
              >
                °C
              </button>
              <button
                className={styles.unitButtonF}
                name="imperial"
                onClick={unitsChange}
              >
                °F
              </button>
            </div>
          </div>
          {weatherData && (
            <DaysContainer info={weatherData.daily} symbol={symbolUnit} />
          )}
        </div>
        <div className={styles.section2}>
          {weatherData && <InformationContainer weatherData={weatherData} />}
        </div>
        <footer className={styles.footer}>
          <p>
            created by <span className={styles.name}>Ivan Carreño</span> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </div>
  );
}
