/* eslint-disable import/no-unresolved */
import { Navbar } from "./components/Navbar";
import { Game } from "./components/Game";
import { Sidebar } from "./components/Sidebar";
import { Modal } from "./components/Modal";

function App() {
    return (
        <div className="flex md:h-screen min-h-screen w-screen bg-slate-800 overflow-hidden">
            <Sidebar />
            <div className="md:w-4/5 w-full">
                <div className="px-4 py-8">
                    <Navbar />
                    <Game />
                </div>
                <Modal />
            </div>
        </div>
    );
}

export default App;
