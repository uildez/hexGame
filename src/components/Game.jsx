import React from "react";
import { Play } from "phosphor-react";

export const Game = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex items-center justify-center w-2/4 h-[250px] bg-slate-600 rounded-md">
        <button className="flex items-center justify-center gap-2 font-bold px-4 py-2 rounded-md bg-slate-400 text-slate-700 hover:text-slate-400 hover:bg-slate-700 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 shadow-2xl">
          Start
          <Play size={20} weight="fill" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 items-center justify-center w-2/4 mt-4">
        <button className="py-4 text-center font-bold border-2 border-slate-400 text-slate-400 hover:scale-105 hover:bg-slate-400 hover:text-slate-700 rounded-md transition-all ease-in-out duration-300">color</button>
        <button className="py-4 text-center font-bold border-2 border-slate-400 text-slate-400 hover:scale-105 hover:bg-slate-400 hover:text-slate-700 rounded-md transition-all ease-in-out duration-300">color</button>
        <button className="py-4 text-center font-bold border-2 border-slate-400 text-slate-400 hover:scale-105 hover:bg-slate-400 hover:text-slate-700 rounded-md transition-all ease-in-out duration-300">color</button>
      </div>
    </div>
  );
};
