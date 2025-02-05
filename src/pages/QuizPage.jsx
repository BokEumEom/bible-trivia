import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../data/questions";
import styles from "../styles/quiz.module.css";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const question = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === question.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        alert(`퀴즈 종료! 총 점수: ${score + (answer === question.correct ? 1 : 0)}`);
      }
    }, 1000);
  };

  return (
    <div className={styles.quizContainer}>
      {/* 상단 네비게이션 */}
      <header className={styles.navBar}>
        <h1 className={styles.navTitle}>Bible Trivia</h1>
      </header>

      {/* 퀴즈 카드 */}
      <QuestionCard
        question={question}
        onAnswerClick={handleAnswerClick}
        selectedAnswer={selectedAnswer}
      />

      {/* 점수 표시 */}
      <footer className={styles.footer}>
        <p>현재 점수: {score}</p>
      </footer>
    </div>
  );
};

export default QuizPage;
