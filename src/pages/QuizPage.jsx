// src/pages/QuizPage.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Header from "../components/Header";
import Modal from "../components/Modal";
import QuestionCountSelector from "../components/QuestionCountSelector";
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

  // URL에 count 파라미터가 있다면 초기값으로 사용 (숫자형으로 변환)
  const countParam = query.get("count") ? parseInt(query.get("count"), 10) : null;
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(countParam);
  
  // 사용자가 선택한 문제 수만큼 질문 배열을 자르기
  const quizQuestions =
    selectedQuestionCount && questions.length > selectedQuestionCount
      ? questions.slice(0, selectedQuestionCount)
      : questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // 문제 수 선택이 안된 경우 QuestionCountSelector 렌더링
  if (!selectedQuestionCount) {
    return (
      <div className={styles.quizContainer}>
        <Header />
        <QuestionCountSelector onSelect={(count) => setSelectedQuestionCount(count)} />
      </div>
    );
  }

  // 현재 질문
  const question = quizQuestions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === question.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
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
    // 퀴즈 재도전 시 문제 수 선택부터 다시 진행하도록 초기화
    setSelectedQuestionCount(null);
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
              총 점수: {score} / {quizQuestions.length}
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
