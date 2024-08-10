import React, { useState } from "react";
import Result from "./Result";
function Minus({ value1, value2 }) {
  const [result, setResult] = useState("");
  return (
    <>
      <button
        className="btn minus_btn"
        onClick={() => {
          setResult(Number(value1) - Number(value2));
          <Result result={result} />;
        }}
      >
        -
      </button>
    </>
  );
}

export default Minus;
