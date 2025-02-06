// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Header from "../components/Header";
import QuestMap from "../components/QuestMap";
import styles from "../styles/home.module.css";

const categories = [
  {
    icon: <AcademicCapIcon className={styles.icon} />,
    title: "성경 기본본",
    description: "성경의 흥미로운 이야기와 사실에 대한 지식을 테스트해보세요!",
    link: "/quiz?category=knowledge",
    image: "/images/bible_knowledge.webp",
  },
  {
    icon: <BookOpenIcon className={styles.icon} />,
    title: "성경 구절",
    description: "성경의 의미 있는 구절과 그 맥락을 탐구해보세요!",
    link: "/quiz?category=verses",
    image: "/images/bible_verses.webp",
  },
  {
    icon: <UserIcon className={styles.icon} />,
    title: "성경 인물",
    description: "주요 성경 인물들의 감동적인 삶에 대해 배워보세요.",
    link: "/quiz?category=characters",
    image: "/images/bible_characters.webp",
  },
  {
    icon: <ClockIcon className={styles.icon} />,
    title: "성경 역사",
    description: "성경의 역사적 사건들을 깊이 탐구해보세요.",
    link: "/quiz?category=history",
    image: "/images/bible_history.webp",
  },
];

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <section className={styles.quizCategories}>
        <div className={styles.carousel}>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className={styles.card}
              aria-label={`${category.title} 퀴즈 도전하기`}
            >
              {/* 카드 상단 이미지 영역 */}
              <img
                src={category.image}
                alt={category.title}
                className={styles.cardImage}
                loading="lazy"
              />
              {/* 카드 하단 텍스트 영역 */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {category.icon} {category.title}
                </h3>
                <p className={styles.cardDescription}>{category.description}</p>
                <button className={styles.cardButton}>도전하기</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* QuestMap 컴포넌트를 홈 화면 하단에 추가 */}
      <QuestMap />
    </div>
  );
};

export default HomePage;
