import React from "react";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const Buttons = () => {
  const { randomColors, verifyAnswer, timeLeft } = useContext(Context);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 items-center justify-center md:w-2/4 w-full mt-4">
      {randomColors.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => verifyAnswer(item, timeLeft)}
            className="py-4 text-center font-bold border-2 border-slate-400 text-slate-400 hover:scale-105 hover:bg-slate-400 hover:text-slate-700 rounded-md transition-all ease-in-out duration-300"
          >
            #{item}
          </button>
        );
      })}
    </div>
  );
};
