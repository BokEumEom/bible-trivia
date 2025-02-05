// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      {/* 상단 고정 네비게이션 바 */}
      <header className={styles.navBar}>
        <h1 className={styles.navTitle}>📖 성경 퀴즈</h1>
        <p className={styles.navSubtitle}>전 연령이 즐길 수 있는 성경 퀴즈 게임</p>
      </header>

      {/* 퀴즈 카테고리 Carousel */}
      <section className={styles.quizCategories}>
        <div className={styles.carousel}>
          {/* 개별 카테고리 카드 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.category}>💡 일반 성경 지식</span>
              <span className={styles.favoriteIcon}>❤️</span>
            </div>
            <h3 className={styles.cardTitle}>일반 성경 지식</h3>
            <p className={styles.cardDescription}>
              성경의 흥미로운 이야기와 사실에 대한 지식을 테스트해보세요!
            </p>
            <Link to="/quiz" className={styles.cardButton}>
              도전하기
            </Link>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.category}>📜 성경 구절</span>
              <span className={styles.favoriteIcon}>❤️</span>
            </div>
            <h3 className={styles.cardTitle}>성경 구절</h3>
            <p className={styles.cardDescription}>
              성경의 의미 있는 구절과 그 맥락을 탐구해보세요!
            </p>
            <Link to="/quiz/verses" className={styles.cardButton}>
              도전하기
            </Link>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.category}>👤 성경 인물</span>
              <span className={styles.favoriteIcon}>❤️</span>
            </div>
            <h3 className={styles.cardTitle}>성경 인물</h3>
            <p className={styles.cardDescription}>
              주요 성경 인물들의 감동적인 삶에 대해 배워보세요.
            </p>
            <Link to="/quiz/characters" className={styles.cardButton}>
              도전하기
            </Link>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.category}>⏳ 성경 역사</span>
              <span className={styles.favoriteIcon}>❤️</span>
            </div>
            <h3 className={styles.cardTitle}>성경 역사</h3>
            <p className={styles.cardDescription}>
              성경의 역사적 사건들을 깊이 탐구해보세요.
            </p>
            <Link to="/quiz/history" className={styles.cardButton}>
              도전하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
