"use client";
import styles from "../app/page.module.css";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import Menu from "./Menu";
import { useState } from "react";

const Aside = ({ weatherData, localTime, setQuery, symbol }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconUrlFromCode = (code) => `./${code}.png`;

  const locationButton = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className={styles.asideContainer}>
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setQuery={setQuery}
        openMenu={setMenuOpen}
      />
      <div className={styles.buttons}>
        <button
          className={styles.searchPlacesButton}
          onClick={() => setMenuOpen(true)}
        >
          Search for places
        </button>
        <button
          className={styles.locationButton}
          onClick={() => locationButton()}
        >
          <BiCurrentLocation />
        </button>
      </div>

      <div className={styles.imgContainer}>
        <img src={iconUrlFromCode(weatherData.icon)} alt="img" />
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.temp}>
          {`${weatherData.temp.toFixed(0)}`}
          <span className={styles.units}>
            {symbol == "metric" ? "°C" : "°F"}
          </span>
        </h1>

        <p className={styles.description}>{weatherData.details}</p>
        <p className={styles.date}>
          {localTime(weatherData.dt, weatherData.timezone)}
        </p>
        <p className={styles.location}>
          <MdLocationPin style={{ fontSize: "24px" }} />
          {weatherData.name}
        </p>
      </div>
    </div>
  );
};

export default Aside;
