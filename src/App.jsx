import "./App.css";
import Minus from "./assets/components/Minus";
import Plus from "./assets/components/Plus";
import Cross from "./assets/components/Cross";
import Divide from "./assets/components/Divide";
import { useState } from "react";
import Result from "./assets/components/Result";

function App() {
  const [result, setResult] = useState();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <>
      <h1 className="title">Calculator</h1>
      <div className="container">
        <input
          type="number"
          className="input1"
          onChange={(e) => {
            setInput1(e.target.value);
          }}
        />
        <input
          type="text"
          className="input2"
          onChange={(e) => {
            setInput2(e.target.value);
          }}
        />

        <div className="buttons">
          <Plus value1={input1} value2={input2} />
          <Minus value1={input1} value2={input2} />
          <Cross value1={input1} value2={input2} />
          <Divide value1={input1} value2={input2} />
        </div>
        <Result result={result} />
      </div>
    </>
  );
}

export default App;
