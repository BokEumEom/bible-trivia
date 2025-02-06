// src/components/Header.jsx
import styles from "../styles/header.module.css"; // 별도 CSS 파일로 분리(예: header.module.css)

const Header = () => {
  return (
    <header className={styles.navBar}>
      {/* 필요에 따라 로고나 아이콘 추가 */}
      <h1 className={styles.navTitle}>Bible Trivia</h1>
    </header>
  );
};

export default Header;
