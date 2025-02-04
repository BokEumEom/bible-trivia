import styles from "../styles/optionButton.module.css";

const OptionButton = ({ text, onClick, isSelected, isCorrect, isDisabled }) => {
  let buttonClass = styles.optionButton;

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
