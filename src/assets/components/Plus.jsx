import React, { useState } from "react";
import Result from "./Result";
function Plus({ value1, value2 }) {
  const [result, setResult] = useState("");

  return (
    <>
      <button
        className="btn plus_btn"
        onClick={() => {
          setResult(Number(value1) + Number(value2));
          console.log(result);
          //   <Result result={result} />;
        }}
      >
        +
      </button>
    </>
  );
}

export default Plus;
