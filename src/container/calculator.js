import React, { useState } from "react";
import * as math from "mathjs";
import infixToPostfix from "infix-to-postfix";

import Button from "../components/button";
import Display from "../components/display";

import "./style.css";

const Calculator = () => {
  const [state, setState] = useState({
    result: "",
    infix: "",
    resultGenerated: false,
    options: [
      ["(", "CE", ")", "C"],
      ["1", "2", "3", "+"],
      ["4", "5", "6", "-"],
      ["7", "8", "9", "*"],
      [".", "0", "=", "/"],
    ],
  });

  const handleButtonActions = (val) => {
    const checkOperator = state.result.slice(-1);
    if (val === "=") {
      if (!["+", "-", "*", "/", "("].includes(checkOperator)) {
        setState((st) => ({
          ...st,
          result: math.evaluate(state.result).toString(),
          resultGenerated: true,
        }));
      }
    } else if (val === "C") {
      setState((st) => ({
        ...st,
        result: "",
        infix: "",
      }));
    } else if (val === "CE") {
      setState((st) => ({
        ...st,
        result: state.result.slice(0, -1),
        infix: state.result.slice(0, -1),
      }));
    } else {
      setState((st) => ({
        ...st,
        result: state.resultGenerated ? val : state.result + val,
        infix: state.resultGenerated ? val : state.result + val,
        resultGenerated: false,
      }));
    }
  };
  const postfix = infixToPostfix(state.infix);

  return (
    <div className="app">
      <Display result={state.result} />
      <Display result={state.infix} />
      <Display result={postfix} />
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
