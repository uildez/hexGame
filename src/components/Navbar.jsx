import { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import { Context } from "../contexts/Context";
import Logo from "../assets/images/logo.png";
import { List } from "phosphor-react";

export const Navbar = () => {
    const { timeLeft, score, highScore, reset, setToggleMenu } =
        useContext(Context);

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={Logo}
                alt="Logo HexGame"
                className="md:w-[180px] w-[150px] mb-8 relative"
            />
            <List
                size={32}
                onClick={() => setToggleMenu(true)}
                className="absolute md:hidden right-4 top-12 text-slate-200 bg-slate-600 rounded-md p-1"
            />

            <div className="grid grid-cols-3 justify-between md:w-2/4 w-full bg-slate-600 text-slate-200 text-sm rounded-md shadow-2xl md:mt-0 mt-8">
                <div className="flex flex-col md:justify-center justify-between gap-2 text-center py-2 px-4">
                    <p className="font-bold text-center">
                        Remaining <br />
                        time (s)
                    </p>
                    <h2 className="text-2xl font-bold">
                        {timeLeft === null ? "30" : timeLeft}
                    </h2>
                </div>
                <button
                    onClick={() => reset()}
                    className="flex items-center justify-center font-bold text-center text-xl py-2 bg-slate-400 text-slate-700 hover:text-slate-400 hover:bg-slate-700 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300"
                >
                    Restart
                </button>
                <div className="flex flex-col justify-center gap-2 text-center py-2 px-4">
                    <div className="flex items-center justify-between gap-2">
                        <p className="font-bold">High Score</p>
                        <h2 className="text-2xl font-bold">
                            {Math.max.apply(
                                Math,
                                highScore?.map(function (o) {
                                    return o.highScore;
                                })
                            )}
                        </h2>
                    </div>
                    <span className="w-full h-[2px] bg-slate-800" />
                    <div className="flex items-center justify-between gap-2">
                        <p className="font-bold">Score</p>
                        <h2 className="text-2xl font-bold">{score}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
