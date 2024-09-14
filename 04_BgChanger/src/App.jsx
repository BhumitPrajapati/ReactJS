import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-green-700 justify-center p-10">Background Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-slate-300">
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
