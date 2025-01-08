import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <p className="text-center text-3xl">Hello Redux.</p>
      <Addtodo />
      <Todos />
    </>
  );
}

export default App;
