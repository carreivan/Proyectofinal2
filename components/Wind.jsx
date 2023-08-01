import styles from "@/app/page.module.css";
import { MdAssistantNavigation } from "react-icons/md";
import { useState, useEffect } from "react";

const Wind = ({ weather }) => {
  const [windDegrees, setWindDegrees] = useState(0);
  const [windDirection, setWindDirection] = useState("");

  useEffect(() => {
    const degrees = weather.deg;
    const direction = getWindDirection(degrees);
    setWindDegrees(degrees);
    setWindDirection(direction);
  }, [weather.deg]);

  const getWindDirection = (degrees) => {
    if (degrees >= 337.5 || degrees < 22.5) {
      return "N";
    } else if (degrees >= 22.5 && degrees < 45) {
      return "NNE";
    } else if (degrees >= 45 && degrees < 67.5) {
      return "NE";
    } else if (degrees >= 67.5 && degrees < 90) {
      return "ENE";
    } else if (degrees >= 90 && degrees < 112.5) {
      return "E";
    } else if (degrees >= 112.5 && degrees < 135) {
      return "ESE";
    } else if (degrees >= 135 && degrees < 157.5) {
      return "SE";
    } else if (degrees >= 157.5 && degrees < 180) {
      return "SSE";
    } else if (degrees >= 180 && degrees < 202.5) {
      return "S";
    } else if (degrees >= 202.5 && degrees < 225) {
      return "SSW";
    } else if (degrees >= 225 && degrees < 247.5) {
      return "SW";
    } else if (degrees >= 247.5 && degrees < 270) {
      return "WSW";
    } else if (degrees >= 270 && degrees < 292.5) {
      return "W";
    } else if (degrees >= 292.5 && degrees < 315) {
      return "WNW";
    } else if (degrees >= 315 && degrees < 337.5) {
      return "NW";
    } else {
      return "";
    }
  };
  return (
    <div className={styles.containerInfo}>
      <span className={styles.titleInfo}>Wind status</span>
      <h2 className={styles.principalInfo}>
        {weather.speed.toFixed(0)}

        <span className={styles.infoUnit}>mph</span>
      </h2>
      <div className={styles.navigationDiv}>
        <MdAssistantNavigation
          className={styles.iconNavigation}
          style={{ transform: `rotate(${windDegrees}deg)` }}
        />
        <span className={styles.navigationUnit}>{windDirection}</span>
      </div>
    </div>
  );
};

export default Wind;
