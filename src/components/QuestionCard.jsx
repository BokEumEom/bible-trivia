import OptionButton from "./OptionButton";
import styles from "../styles/questionCard.module.css";

const QuestionCard = ({ question, onAnswerClick, selectedAnswer }) => {
  return (
    <div className={styles.questionCard}>
      <h2 className={styles.questionText}>{question.text}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option}
            onClick={() => onAnswerClick(option)}
            isSelected={selectedAnswer === option}
            isCorrect={option === question.correct}
            isDisabled={!!selectedAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
