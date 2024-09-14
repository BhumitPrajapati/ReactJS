import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if(count <= 19){
      setCount(count + 1);
    }else{
      alert("Count should be less than 20");
    }
  };
  const subValue = () => {
    if(count === 0){
      alert("Count should be greater than 0");
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hello Bhumit</h1>
      <h2>Count {count}</h2>
      <button onClick={addValue}>Add </button>
      <button onClick={subValue}>Subtract</button>
    </>
  );
}

export default App;
