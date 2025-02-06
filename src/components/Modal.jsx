import { useNavigate } from "react-router-dom";
import { HomeIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import styles from "../styles/modal.module.css";

const Modal = ({ title, children, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>{title}</h2>
        <div className={styles.modalContent}>{children}</div>
        <div className={styles.modalButtons}>
          {onClose && (
            <button className={styles.modalButton} onClick={onClose}>
              <ArrowPathIcon className={styles.buttonIcon} />
              다시 도전하기
            </button>
          )}
          <button className={styles.homeButton} onClick={() => navigate("/")}>
            <HomeIcon className={styles.buttonIcon} />
            홈으로 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
