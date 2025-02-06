// src/components/QuestionCountSelector.jsx
import Modal from "./Modal";
import styles from "../styles/questionCountSelector.module.css";

const QuestionCountSelector = ({ onSelect }) => {
  return (
    // onClose prop을 전달하지 않으므로 "다시 도전하기" 버튼은 렌더링되지 않습니다.
    <Modal title="문제 수 선택">
      <div className={styles.container}>
        <p className={styles.description}>
          퀴즈에 도전할 문제 수를 선택해주세요.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.countButton} onClick={() => onSelect(10)}>
            10문제
          </button>
          <button className={styles.countButton} onClick={() => onSelect(15)}>
            15문제
          </button>
          <button className={styles.countButton} onClick={() => onSelect(20)}>
            20문제
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QuestionCountSelector;
