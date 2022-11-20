import { X } from "phosphor-react";
import React, { useContext } from "react";
import { Context } from "../contexts/Context";

export const Modal = () => {
  const { openModal, setOpenModal } = useContext(Context);

  return (
    <>
      {openModal === true ? (
        <>
          <div className="fixed flex items-center justify-center top-0 z-50 md:pr-80 md:px-0 px-4 w-full h-full bg-slate-800/50 backdrop-blur-sm">
            {/* <!-- Modal content --> */}
            <div className="rounded-lg shadow bg-slate-600 max-w-[600px] p-4">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-start rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 px-4 py-2 dark:text-white">
                  How to play
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <X size={24} onClick={() => setOpenModal(false)} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="px-4 py-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The game consists of hitting as many colors as possible in
                  30s. When the game starts, a random color will appear and stop
                  3 answer options should appear (must be in hexadecimal). Two
                  of which are incorrect (randomly generated), and a correct
                  one. Each round, a new color appears, and the player will have
                  10s to respond and result in win or loss of score:
                </p>
                <ul className="ml-6 mt-4 list-disc text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <li>
                    If the player does not respond in time, he loses 2 points.{" "}
                  </li>
                  <li>
                    If the player answers in time but wrong, he will lose 1
                    point.{" "}
                  </li>
                  <li>
                    If the player answers in time and correctly, he will earn 5
                    spots.
                  </li>
                </ul>
              </div>
              <p className="text-center text-slate-200 font-bold mt-4 mb-2">Difficulty</p>
              <select className="text-center w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-all ease-in-out cursor-pointer">
                <option className="px-4" selected value="coconut">
                  Easy
                </option>
                <option className="px-4" value="grapefruit">Medium</option>
                <option className="px-4" value="lime">Hard</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
