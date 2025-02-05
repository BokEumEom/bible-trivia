// src/components/OptionButton.jsx
import styles from "../styles/optionButton.module.css";

const OptionButton = ({ text, onClick, isSelected, isCorrect, isDisabled }) => {
  // 기본 버튼 클래스
  let buttonClass = styles.optionButton;

  // 선택된 경우, 정답 여부에 따라 스타일을 변경
  if (isSelected) {
    buttonClass = isCorrect
      ? `${styles.optionButton} ${styles.correct}`
      : `${styles.optionButton} ${styles.incorrect}`;
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default OptionButton;
