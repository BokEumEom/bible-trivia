// src/components/ProgressBar.jsx
import styles from "../styles/progressBar.module.css";

const ProgressBar = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${percentage}%` }}
      ></div>
      <span className={styles.progressText}>
        {current} / {total}
      </span>
    </div>
  );
};

export default ProgressBar;
