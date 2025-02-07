// src/components/Header.jsx
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.banner}>
        <h1 className={styles.navTitle}>Bible Trivia</h1>
      </div>
    </header>
  );
};

export default Header;
