import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({ username, password });
  };
  return (
    <div>
      {/* <h1>Login</h1> */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
      className="m-4"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className = 'bg-slate-600' onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
