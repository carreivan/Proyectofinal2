import Air from "./Air";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import Wind from "./Wind";
import styles from "@/app/page.module.css";

const InformationContainer = ({ weatherData }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div className={styles.textAppContainer}>
        {weatherData && <h3 className={styles.textApp}>Today’s Hightlights</h3>}
      </div>
      <div className={styles.divInformation}>
        <Wind weather={weatherData} />
        <Humidity weatherData={weatherData} />
      </div>
      <div className={styles.divInformation}>
        <Visibility weatherData={weatherData} />
        <Air weatherData={weatherData} />
      </div>
    </div>
  );
};

export default InformationContainer;
