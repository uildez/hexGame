import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
import { Play } from "phosphor-react";
import { Buttons } from "./Buttons";

export const Game = () => {
  const { timeLeft, randomColors, start, selectedColor, setSelectedColor } =
    useContext(Context);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        {timeLeft === null ? (
          <>
            <div className="flex items-center justify-center md:w-2/4 w-full h-[250px] bg-slate-600 rounded-md">
              <button
                onClick={() => start()}
                className="flex items-center justify-center gap-2 font-bold px-4 py-2 rounded-md bg-slate-400 text-slate-700 hover:text-slate-400 hover:bg-slate-700 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 shadow-2xl"
              >
                Start
                <Play size={20} weight="fill" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex items-center justify-center md:w-2/4 w-full h-[250px] rounded-md`}
              style={{ backgroundColor: `#${selectedColor}` }}
            />
            <Buttons />
          </>
        )}
      </div>
    </>
  );
};
