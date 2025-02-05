// src/pages/QuizPage.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Header from "../components/Header";
import Modal from "../components/Modal";
import styles from "../styles/quiz.module.css";
import { knowledge, verses, characters, history } from "../data";

const QuizPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category") || "knowledge"; // 기본값은 knowledge

  // 선택한 카테고리에 따라 질문 배열 선택
  let questions;
  switch (category) {
    case "verses":
      questions = verses;
      break;
    case "characters":
      questions = characters;
      break;
    case "history":
      questions = history;
      break;
    case "knowledge":
    default:
      questions = knowledge;
      break;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

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
        setQuizFinished(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className={styles.quizContainer}>
      <Header />
      <div className={styles.questionWrapper}>
        {!quizFinished ? (
          question ? (
            <QuestionCard
              question={question}
              onAnswerClick={handleAnswerClick}
              selectedAnswer={selectedAnswer}
            />
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <Modal title="퀴즈 종료!" onClose={resetQuiz}>
            <p>
              총 점수: {score} / {questions.length}
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
