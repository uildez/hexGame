import { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import { CheckCircle, Gear, X, XCircle } from "phosphor-react";

export const Sidebar = () => {
  const { history, resetGame, toggleMenu, setToggleMenu, setOpenModal } = useContext(Context);

  const setColorText = (hex) => {
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
    const colorText = brightness > 155;
    return colorText;
  };

  return (
    <>
      <div
        className={`md:flex ${
          toggleMenu === true ? "fixed flex" : "hidden"
        } flex-col items-center justify-between md:w-[350px] w-full max-h-screen min-h-screen overflow-y-auto bg-slate-900 shadow-2xl px-4 py-8 md:relative z-20`}
      >
        <X
          size={32}
          onClick={() => setToggleMenu(false)}
          className="absolute md:hidden right-4 top-12 text-slate-200 bg-slate-600 rounded-md p-1"
        />
        <div className="grid grid-cols-3 w-full justify-center items-center bg-slate-600 rounded-md md:mt-0 mt-20">
          <p className="text-center text-slate-100 text-sm py-2 px-4">
            Guessed color
          </p>
          <p className="flex items-center text-center text-sm h-full py-2 px-4 bg-slate-400 text-slate-700 rounded-md">
            Corrent color
          </p>
          <p className="text-center text-slate-100 text-sm py-2 px-4">Score</p>
        </div>
        <div className="w-full max-h-[70%] overflow-y-auto my-4">
          {history?.length > 0 ? (
            <>
              {history
                .slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    <div
                      className="flex flex-col gap-2 w-full my-2"
                      key={index}
                    >
                      {item.status === "correct" ? (
                        <div className="grid grid-cols-3 w-full justify-between items-center bg-slate-600 rounded-md overflow-hidden">
                          <span
                            className="flex items-center justify-center col-span-2 text-sm text-white px-4 w-full h-[60px]"
                            style={{
                              backgroundColor: `#${item.correctColor}`,
                            }}
                          >
                            {setColorText(item.correctColor)}#
                            {item.correctColor}
                          </span>
                          <span className="flex items-center justify-end px-4  text-sm text-white gap-2">
                            {item.time}s
                            <CheckCircle
                              size={24}
                              weight="fill"
                              className="text-green-500 bg-white rounded-full"
                            />
                          </span>
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 w-full justify-between items-center bg-slate-600 rounded-md overflow-hidden">
                          <span
                            className="flex items-center justify-center text-sm text-white px-4 h-[60px]"
                            style={{
                              backgroundColor: `#${item.selectColor}`,
                            }}
                          >
                            #{item.selectColor}
                          </span>
                          <span
                            className="flex items-center justify-center text-sm text-white px-4 h-[60px]"
                            style={{
                              backgroundColor: `#${item.correctColor}`,
                            }}
                          >
                            #{item.correctColor}
                          </span>
                          <span className="flex items-center justify-end px-4  text-sm text-white gap-2">
                            {item.time}s
                            <XCircle
                              size={24}
                              weight="fill"
                              className="text-red-600 bg-white rounded-full"
                            />
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
            </>
          ) : (
            <p className="mt-4 text-slate-200 text-center text-sm py-4 w-full bg-slate-500 rounded-md">
              Start to play to store your history
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 w-full gap-2">
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center justify-center px-4 py-2 bg-slate-400 text-slate-700 rounded-md hover:text-slate-400 hover:bg-slate-700 md:hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 shadow-2xl"
          >
            Configuration <Gear className="ml-2" size={24} weight="fill" />
          </button>
          <button
            onClick={() => resetGame()}
            className="px-4 py-2 bg-slate-400 text-slate-700 rounded-md hover:text-slate-400 hover:bg-slate-700 md:hover:scale-110 cursor-pointer transition-all ease-in-out duration-300 shadow-2xl"
          >
            Reset Game
          </button>
        </div>
      </div>
    </>
  );
};
