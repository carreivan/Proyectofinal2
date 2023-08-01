import styles from "@/app/page.module.css";

const Air = ({ weatherData }) => {
  return (
    <div className={styles.containerInfo2}>
      <span className={styles.titleInfo}>Air Pressure</span>
      <h2 className={styles.principalInfo}>
        {weatherData.pressure} <span className={styles.infoUnit}>mb</span>
      </h2>
    </div>
  );
};

export default Air;
