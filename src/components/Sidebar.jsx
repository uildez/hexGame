import { useContext } from "react";
import { Context } from "../contexts/Context";
import { CheckCircle, XCircle } from "phosphor-react";

export const Sidebar = () => {
  const { history, resetGame } = useContext(Context);

  return (
    <div className="flex flex-col items-center w-[350px] h-full overflow-y-auto bg-slate-900 shadow-2xl px-4 py-8 relative">
      <div className="grid grid-cols-3 w-full justify-center items-center bg-slate-600 rounded-md">
        <p className="text-center text-slate-100 text-sm py-2">Guessed color</p>
        <p className="flex items-center text-center text-slate-100 text-sm h-full px-4 bg-slate-500 rounded-md">
          Corrent color
        </p>
        <p className="text-center text-slate-100 text-sm py-2">Score</p>
      </div>
      <div className="w-full max-h-[80%] overflow-y-auto my-4">
        {history.length > 0 ? (
          <>
            {history.map((item, index) => {
              return (
                <div className="flex flex-col gap-2 w-full my-2" key={index}>
                  {item.status === "correct" ? (
                    <div className="grid grid-cols-3 w-full justify-between items-center bg-slate-600 rounded-md overflow-hidden">
                      <span
                        className="flex items-center justify-center col-span-2 text-sm text-white px-4 w-full h-[60px]"
                        style={{ backgroundColor: `#${item.correctColor}` }}
                      >
                        #{item.correctColor}
                      </span>
                      <span className="flex items-center justify-end px-4  text-sm text-white gap-2">
                        {/* {console.log(item)} */}
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
                        style={{ backgroundColor: `#${item.selectColor}` }}
                      >
                        #{item.selectColor}
                      </span>
                      <span
                        className="flex items-center justify-center text-sm text-white px-4 h-[60px]"
                        style={{ backgroundColor: `#${item.correctColor}` }}
                      >
                        #{item.correctColor}
                      </span>
                      <span className="flex items-center justify-end px-4  text-sm text-white gap-2">
                        24s
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

              // if (item.status === "correct") {
              //   return console.log(item);
              // } else {
              //   return <div key={index}></div>;
              // }
            })}
          </>
        ) : (
          <p className="mt-4 text-slate-200 text-center text-sm py-4 w-full bg-slate-500 rounded-md">
            Start to play to store your history
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 w-full gap-2 absolute bottom-8 px-4">
        <button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-all ease-in-out cursor-pointer">
          Manual
        </button>
        <button
          onClick={() => resetGame()}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-all ease-in-out cursor-pointer"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};
