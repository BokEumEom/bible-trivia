import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      {/* 상단 네비게이션 */}
      <header className={styles.navBar}>
        <h1 className={styles.navTitle}>📖 Bible Trivia</h1>
        <p className={styles.navSubtitle}>성경 퀴즈에 도전해보세요!</p>
      </header>

      {/* 퀴즈 카테고리 (1열 구조) */}
      <section className={styles.quizCategories}>
        <Link to="/quiz" className={`${styles.quizCard} ${styles.tile2}`}>
          <h3 className={styles.cardTitle}>💡 일반 성경 지식</h3>
        </Link>
        <Link to="/quiz/verses" className={`${styles.quizCard} ${styles.tile4}`}>
          <h3 className={styles.cardTitle}>📜 성경 구절</h3>
        </Link>
        <Link to="/quiz/characters" className={`${styles.quizCard} ${styles.tile8}`}>
          <h3 className={styles.cardTitle}>👤 성경 인물</h3>
        </Link>
        <Link to="/quiz/history" className={`${styles.quizCard} ${styles.tile16}`}>
          <h3 className={styles.cardTitle}>⏳ 성경 역사</h3>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
