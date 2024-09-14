import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const genratePswd = useCallback(() => {
    let psw = "";

    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbersAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_+";

    for (let i = 1; i <= passwordLength; i++) {
      psw += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(psw);
  }, [charAllowed, numbersAllowed, passwordLength, setPassword]);

  const passwordRef = useRef(null);

  useEffect(() => {
    genratePswd();
  }, [genratePswd, passwordLength, charAllowed, numbersAllowed]);
 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 p-3">
      <h1 className="text-orange-500 text-center m-2 text-2xl">
        Password Generator
      </h1>
      <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none w-full py-1 px-3"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 hover:bg-blue-700 text-white shrink-0 px-3 py-0.5 font-bold rounded">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-2">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={20}
            value={passwordLength}
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
