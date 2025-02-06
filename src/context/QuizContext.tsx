// src/context/QuizContext.jsx
import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    knowledge: { currentQuestion: 0, score: 0, completed: false },
    verses: { currentQuestion: 0, score: 0, completed: false },
    characters: { currentQuestion: 0, score: 0, completed: false },
    history: { currentQuestion: 0, score: 0, completed: false },
  });

  const updateProgress = (category, newData) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      [category]: { ...prevProgress[category], ...newData },
    }));
  };

  const resetProgress = () => {
    setProgress({
      knowledge: { currentQuestion: 0, score: 0, completed: false },
      verses: { currentQuestion: 0, score: 0, completed: false },
      characters: { currentQuestion: 0, score: 0, completed: false },
      history: { currentQuestion: 0, score: 0, completed: false },
    });
  };

  return (
    <QuizContext.Provider value={{ progress, updateProgress, resetProgress }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
