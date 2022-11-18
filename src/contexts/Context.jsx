import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [timeAnswer, setTimeAnswer] = useState(30);
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedColor, setSelectedColor] = useState();
  const [highScore, setHighScore] = useState([]);
  const [randomColors, setRandomColors] = useState([]);
  const [history, setHistory] = useState([]);

  // Get Random Colors
  const getRandomHex = () => {
    return (Math.floor(Math.random() * 16777215).toString(16));
  }
  
  const start = () => {
    setStartGame(true)
    setTimeLeft(30);
    setHistory([])
  }

  useEffect(() => {
    if(randomColors.length < 3 ) {
      setRandomColors((prev) => [...prev, getRandomHex()])
    }
    else if(randomColors.length = 3 ){
      const randomIndex = Math.floor(Math.random() * randomColors.length) 
      setSelectedColor(randomColors[randomIndex])
    }
  }, [randomColors.length])
  

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

  function reset() {
    setScore(0);
    setTimeLeft(null);
    setRandomColors([])
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

  decreseTime()

  const verifyAnswer = (e, timeLeft) => {
    if (e === selectedColor) {
      const timeResponse = timeAnswer - timeLeft 
      setTimeAnswer(timeLeft)

      setScore(score + 5);
      
      setHistory([
        ...history,
        {
          status: "correct",
          correctColor: selectedColor,
          time: timeResponse,
        },
      ])

      setRandomColors([])
    } else {
      const timeResponse = timeAnswer - timeLeft 
      setTimeAnswer(timeLeft)

      setScore(score - 1);
      setHistory([
        ...history,
        {
          status: "wrong",
          selectColor: e,
          correctColor: selectedColor,
          time: timeResponse,
        },
      ]);
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
        randomColors,
        selectedColor, 
        setSelectedColor,
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
