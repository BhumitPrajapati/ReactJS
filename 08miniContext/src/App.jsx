import Login from "./components/login";
import Profile from "./components/profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="bg-gray-800 p-4">
          <h1 className="text-white text-center p-8">Hello Bhumit</h1>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
