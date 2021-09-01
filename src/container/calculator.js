import React, { useState } from "react";
import * as math from "mathjs";

import Button from "../components/button";
import Display from "../components/display";

import "./style.css";

const Calculator = () => {
  const [state, setState] = useState({
    result: "",
    options: [
      ["(", "CE", ")", "C"],
      ["1", "2", "3", "+"],
      ["4", "5", "6", "-"],
      ["7", "8", "9", "*"],
      [".", "0", "=", "/"],
    ],
  });

  const handleButtonActions = (val) => {
    if (val === "=") {
      setState((st) => ({
        ...st,
        result: math.evaluate(state.result).toString(),
      }));
    } else if (val === "C") {
      setState((st) => ({
        ...st,
        result: "",
      }));
    } else if (val === "CE") {
      setState((st) => ({
        ...st,
        result: state.result.slice(0, -1),
      }));
    } else {
      setState((st) => ({
        ...st,
        result: state.result + val,
      }));
    }
  };

  return (
    <div className="app">
      <Display result={state.result} />
      <div className="row-wrapper">
        {state.options.map((row, index) => {
          return (
            <div key={index} className="row">
              {row.map((digit) => {
                return (
                  <Button key={digit} handleClick={handleButtonActions}>
                    {digit}
                  </Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Calculator;
