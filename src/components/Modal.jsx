// src/components/Modal.jsx
import styles from "../styles/modal.module.css";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>
        <div className={styles.modalContent}>{children}</div>
        {onClose && (
          <button className={styles.modalButton} onClick={onClose}>
            다시 도전하기
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
