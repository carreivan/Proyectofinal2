import styles from "@/app/page.module.css";

const Visibility = ({ weatherData }) => {
  const newVisibility = (weatherData.visibility / 1609.34).toFixed(1);
  return (
    <div className={styles.containerInfo2}>
      <span className={styles.titleInfo}>Visibility</span>

      <h2 className={styles.principalInfo}>
        {newVisibility} <span className={styles.infoUnit}>miles</span>
      </h2>
    </div>
  );
};

export default Visibility;
