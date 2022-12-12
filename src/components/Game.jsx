/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useContext, useRef } from "react";
import { Context } from "../contexts/Context";
import { Play } from "phosphor-react";
import { Buttons } from "./Buttons";

export const Game = () => {
    const ref = useRef(null);
    const { timeLeft, start, selectedColor } = useContext(Context);

    const width = ref.current ? ref.current.offsetWidth : 0;
    const percent = timeLeft / 30;

    let progress = width * percent;

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-4">
                {timeLeft === null ? (
                    <>
                        <div className="button flex items-center justify-center md:w-2/4 w-full h-[250px] bg-slate-600 rounded-md">
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
                            ref={ref}
                            className={`bar flex items-center justify-center md:w-2/4 w-full h-[250px] rounded-md relative overflow-hidden`}
                            style={{ backgroundColor: `#${selectedColor}` }}
                        >
                            <div
                                style={{ width: `${progress}px` }}
                                className={`h-[10px] ${
                                    progress > 200
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }  w-full absolute top-0 transition-all ease-in-out`}
                            />
                        </div>
                        <Buttons />
                    </>
                )}
            </div>
        </>
    );
};
