// src/components/QuestMap.jsx
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import styles from "../styles/questMap.module.css";
import { quests } from "../data/quests";
import { useQuiz } from "../context/QuizContext";

const QuestMap = () => {
  const { progress } = useQuiz();

  return (
    <div className={styles.questMapContainer}>
      <h2 className={styles.mapTitle}>성경 퀴즈 월드맵 - 퀘스트</h2>
      <div className={styles.mapGrid}>
        {quests.map((quest) => {
          // URL에서 카테고리 이름 추출 ("knowledge", "verses", 등)
          const category = quest.link.split("category=")[1];
          const catProgress = progress[category];

          // quest.icon은 이미 Heroicon 컴포넌트이므로 JSX로 렌더링합니다.
          const IconComponent = quest.icon;

          return (
            <Link
              key={quest.id}
              to={quest.status !== "locked" ? quest.link : "#"}
              className={`${styles.questCard} ${styles[quest.status]}`}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.questIcon} />
                {quest.status === "locked" && (
                  <div className={styles.lockOverlay}>
                    <LockClosedIcon className={styles.lockIcon} />
                  </div>
                )}
              </div>
              <div className={styles.questInfo}>
                <span className={styles.questTitle}>{quest.title}</span>
                {catProgress && (
                  <div className={styles.progressInfo}>
                    {catProgress.currentQuestion} / 20
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.mapFooter}>
        <button className={styles.findQuestBtn}>
          지도에서 새로운 퀘스트 찾기!
        </button>
      </div>
    </div>
  );
};

export default QuestMap;
