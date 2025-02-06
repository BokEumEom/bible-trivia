// src/components/MapModal.jsx
import styles from "../styles/mapModal.module.css";
import { LockClosedIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const MapModal = ({ quests, onClose, onQuestClick }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h3 className={styles.modalTitle}>퀘스트 탐색</h3>
        <div className={styles.mapContainer}>
          <img
            src="/images/interactive-map.webp"
            alt="Interactive Map"
            className={styles.mapImage}
          />
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={styles.questMarker}
              style={{
                top: quest.position?.top || "50%",
                left: quest.position?.left || "50%",
              }}
              onClick={() => onQuestClick(quest)}
            >
              {quest.status === "locked" ? (
                <LockClosedIcon className={styles.markerIcon} />
              ) : (
                // 해제된 퀘스트는 CheckCircleIcon 또는 기본 아이콘을 표시합니다.
                <CheckCircleIcon className={styles.unlockedIcon} />
              )}
              <span className={styles.markerText}>{quest.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapModal;
