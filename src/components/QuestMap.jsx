// src/components/QuestMap.jsx
import { Link } from "react-router-dom";
import styles from "../styles/questMap.module.css";

// 각 퀘스트에 상태(status)를 추가하여 스타일링에 활용
const quests = [
  { id: 1, title: "창세기 이야기 퀴즈", icon: "🌍", link: "/quiz/genesis", status: "completed" },
  { id: 2, title: "출애굽기 미션", icon: "🏛️", link: "/quiz/exodus", status: "in-progress" },
  { id: 3, title: "예수님의 생애 탐험", icon: "🕊️", link: "/quiz/jesus", status: "locked" },
  { id: 4, title: "십자가의 의미 퀴즈", icon: "✝️", link: "/quiz/cross", status: "locked" },
];

const QuestMap = () => {
  return (
    <div className={styles.questMapContainer}>
      <h2 className={styles.mapTitle}>🗺️ 성경 퀴즈 월드맵 - 퀘스트 방식</h2>
      <div className={styles.mapGrid}>
        {quests.map((quest) => (
          <Link
            key={quest.id}
            // 잠긴 퀘스트는 링크를 막음
            to={quest.status !== "locked" ? quest.link : "#"}
            className={`${styles.questCard} ${styles[quest.status]}`}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.questIcon}>{quest.icon}</span>
              {quest.status === "locked" && (
                <div className={styles.lockOverlay}>
                  <span className={styles.lockIcon}>🔒</span>
                </div>
              )}
            </div>
            <div className={styles.questInfo}>
              <span className={styles.questTitle}>{quest.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.mapFooter}>
        <button className={styles.findQuestBtn}>
          🎮 지도에서 새로운 퀘스트 찾기!
        </button>
      </div>
    </div>
  );
};

export default QuestMap;
