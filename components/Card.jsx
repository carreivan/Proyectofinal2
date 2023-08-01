import styles from "../app/page.module.css";

const Card = ({ item, symbol }) => {
  const iconUrlFromCode = (code) => `./${code}.png`;
  return (
    <div className={styles.containerCard}>
      <p style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}>
        {item.title}
      </p>
      <img
        style={{ width: "56px", height: "62px" }}
        src={iconUrlFromCode(item.icon)}
        alt=""
      />
      <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
        <span className={styles.tempMax}>
          {`${item.temp_max.toFixed(0)}`}
          <span style={{ marginLeft: "2px" }}>
            {symbol == "metric" ? "°C" : "°F"}
          </span>
        </span>
        <span className={styles.tempMin}>
          {`${item.temp_min.toFixed(0)}`}
          <span style={{ marginLeft: "2px" }}>
            {symbol == "metric" ? "°C" : "°F"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
