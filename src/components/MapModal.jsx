// src/components/MapModal.jsx
import { LockClosedIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import styles from "../styles/mapModal.module.css";

const MapModal = ({ quests, onClose, onQuestClick }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <XCircleIcon className={styles.closeIcon} />
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
