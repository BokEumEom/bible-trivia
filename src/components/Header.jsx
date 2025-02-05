// src/components/Header.jsx
import styles from "../styles/home.module.css";

const Header = () => {
  return (
    <header className={styles.navBar}>
      <h1 className={styles.navTitle}>Bible Trivia</h1>
      <p className={styles.navSubtitle}>전 연령이 즐길 수 있는 성경 퀴즈 게임</p>
    </header>
  );
};

export default Header;
