// src/components/QuestMap.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon, MapIcon } from "@heroicons/react/24/solid";
import styles from "../styles/questMap.module.css";
import { quests } from "../data/quests";
import { useQuiz } from "../context/QuizContext";
import MapModal from "./MapModal";

const QuestMap = () => {
  const { progress } = useQuiz();
  const [modalOpen, setModalOpen] = useState(false);

  // 지도 모달에서 잠긴 퀘스트 아이콘만 전달
  const lockedQuests = quests.filter((q) => q.status === "locked");

  // 지도 모달 내 퀘스트 아이콘 클릭 시 상세 정보를 표시 (예시로 alert 사용)
  const handleQuestClick = (quest) => {
    alert(`퀘스트: ${quest.title}\n해금 조건: ${quest.unlockCondition || "해금 조건 정보 없음"}`);
  };

  // "지도에서 새로운 퀘스트 찾기!" 버튼 클릭 시 모달 오픈
  const handleFindNewQuest = () => {
    setModalOpen(true);
  };

  return (
    <div className={styles.questMapContainer}>
      <h2 className={styles.mapTitle}>성경 퀴즈 월드맵 - 퀘스트</h2>
      <div className={styles.mapGrid}>
        {quests.map((quest) => {
          // URL에서 카테고리 이름 추출 ("knowledge", "verses", "characters", "history")
          const category = quest.link.split("category=")[1];
          const catProgress = progress[category];

          // 동적 상태 결정:
          // - 완료되었으면 "completed"
          // - 진행 중이면 "in-progress"
          // - 아무 것도 진행하지 않았다면 "locked"
          const computedStatus = catProgress
            ? catProgress.completed
              ? "completed"
              : catProgress.currentQuestion > 0
              ? "in-progress"
              : "locked"
            : "locked";

          // quest.icon은 이미 Heroicon 컴포넌트이므로 JSX로 렌더링합니다.
          const IconComponent = quest.icon;

          return (
            <Link
              key={quest.id}
              to={computedStatus !== "locked" ? quest.link : "#"}
              className={`${styles.questCard} ${styles[computedStatus]}`}
            >
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.questIcon} />
                {computedStatus === "locked" && (
                  <div className={styles.lockOverlay}>
                    <LockClosedIcon className={styles.lockIcon} />
                  </div>
                )}
              </div>
              <div className={styles.questInfo}>
                <span className={styles.questTitle} title={quest.title}>
                  {quest.title}
                </span>
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
        <button className={styles.findQuestBtn} onClick={handleFindNewQuest}>
          <MapIcon className={styles.mapIcon} />
          지도에서 새로운 퀘스트 찾기!
        </button>
      </div>
      {modalOpen && (
        <MapModal
          quests={lockedQuests}
          onClose={() => setModalOpen(false)}
          onQuestClick={handleQuestClick}
        />
      )}
    </div>
  );
};

export default QuestMap;
