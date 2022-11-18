import { Navbar } from "./components/Navbar";
import { Game } from "./components/Game";
import { Sidebar } from "./components/Sidebar";
import { X } from "phosphor-react";

function App() {
  return (
    <div className="flex h-screen w-screen bg-slate-800">
      <Sidebar />
      <div className="w-4/5 px-4 py-8">
        <Navbar />
        <Game />
      </div>
    </div>
  );
}

export default App;
