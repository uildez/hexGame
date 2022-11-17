import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState([]);
  const [randomColor, setRandomColor] = useState();
  const [secondRandomColor, setSecondRandomColor] = useState();
  const [thirdRandomColor, setThirdRandomColor] = useState();
  const [history, setHistory] = useState([]);

  // Set Timer
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  function start() {
    setTimeLeft(5);
    randomColors();
  }

  function randomColors() {
    setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    setSecondRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    setThirdRandomColor(Math.floor(Math.random() * 16777215).toString(16));
  }

  function reset() {
    setScore(0);
    setTimeLeft(null);
  }

  function resetGame() {
    setScore(0);
    setHighScore([
      {
        index: highScore.length + 1,
        highScore: 0,
      },
    ]);
    setHistory([]);
  }

  // function noAnswer(){
  //   if (timeLeft === 20){
  //     setScore(score - 2);
  //   }
  // }

  function verifyAnswer(e) {
    if (e === randomColor) {
      setScore(score + 5);
      setHistory([
        ...history,
        {
          status: "correct",
          correctColor: randomColor,
          time: timeLeft, 
        },
      ]);

      randomColors();
    }else {
      setScore(score - 1);
      setHistory([
        ...history,
        {
          status: "wrong",
          selectColor: e,
          correctColor: randomColor,
          time: timeLeft, 
        },
      ]);

      randomColors();
    }
  }

  // Set High Score
  useEffect(() => {
    setHighScore([
      ...highScore,
      {
        index: highScore.length + 1,
        highScore: score,
      },
    ]);

    setScore(0);
  }, [timeLeft === 0]);

  return (
    <Context.Provider
      value={{
        timeLeft,
        setTimeLeft,
        score,
        setScore,
        randomColor,
        setRandomColor,
        secondRandomColor,
        thirdRandomColor,
        start,
        verifyAnswer,
        setHistory,
        history,
        resetGame,
        reset,
        highScore,
      }}
    >
      {children}
    </Context.Provider>
  );
};
