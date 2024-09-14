import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let user = [
    {
      usrname: "Bhumit",
      age: 24,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores dolor rem quidem quas eaque.",
    },
    {
      usrname: "Fenil",
      age: 24,
      desc: "Lorem ipsum dolor ",
    },
  ];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-2xl">
        Hello TailWindCSS!
      </h1>
      <Card users={user[0]} />
      <Card users={user[1]} />
    </>
  );
}

export default App;
