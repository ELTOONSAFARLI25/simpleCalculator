import React, { useState } from "react";
import Result from "./Result";
function Divide({ value1, value2 }) {
  const [result, setResult] = useState("");
  return (
    <>
      <button
        className="btn cross_btn"
        onClick={() => {
          setResult((Number(value1) / Number(value2)).toFixed(2));
          <Result result={result} />;
        }}
      >
        /
      </button>
    </>
  );
}

export default Divide;
