import styles from "@/app/page.module.css";
import Card from "./Card";

const DaysContainer = ({ info, symbol }) => {
  return (
    <div className={styles.daysContainer}>
      {info.map((item, i) => (
        <Card key={i} item={item} symbol={symbol} />
      ))}

      <div className={styles.divInvisible}></div>
    </div>
  );
};

export default DaysContainer;
