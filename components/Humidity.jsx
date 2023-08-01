import styles from "@/app/page.module.css";

const Humidity = ({ weatherData }) => {
  const width = weatherData.humidity ? `${weatherData.humidity}%` : `0%`;
  return (
    <div className={styles.containerInfo}>
      <span className={styles.titleInfo}>Humidity</span>
      <h2 className={styles.principalInfo}>
        {weatherData.humidity}
        <span className={styles.infoUnit}>%</span>
      </h2>

      <div style={{ width: "70%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className={styles.humidityBarNumber}>0</span>
          <span className={styles.humidityBarNumber}>50</span>
          <span className={styles.humidityBarNumber}>100</span>
        </div>
        <div className={styles.humidityBar}>
          <div
            className={styles.humidityBarYellow}
            style={{ width: width }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <span className={styles.humidityBarNumber}>%</span>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
