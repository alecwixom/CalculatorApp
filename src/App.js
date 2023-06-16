import React, { useState } from "react";
import "./App.css";
const math = require('mathjs')

function App() {
  const [inputValue, setInputValue] = useState("");

  const buttonHandler = (e) => {
    const buttonValue = e.target.textContent;
    setInputValue((prevValue) => prevValue + buttonValue);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const backInput = () => {
    setInputValue(inputValue.substring(0, inputValue.length -1))
  }

  const solveEquation = () => {
    try {
      const parsedExpression = math.parse(inputValue)
      const evalutedResult = parsedExpression.evaluate()
      
      setInputValue(evalutedResult.toString());
    } catch (error) {
      setInputValue("Enter equation :(");
    }
  };

  return (
    <div className="App">
      <section>
        <div className="calcContainer">
          <input
            className="inputField"
            type="text"
            value={inputValue}
            placeholder="Calculating. . ."
          />
          <div className="calcBtnsContainer">
            <button onClick={buttonHandler}>1</button>
            <button onClick={buttonHandler}>2</button>
            <button onClick={buttonHandler}>3</button>
            <button onClick={buttonHandler}>4</button>
            <button onClick={buttonHandler}>5</button>
            <button onClick={buttonHandler}>6</button>
            <button onClick={buttonHandler}>7</button>
            <button onClick={buttonHandler}>8</button>
            <button onClick={buttonHandler}>9</button>
            <button onClick={buttonHandler}>0</button>
            <button onClick={buttonHandler}>+</button>
            <button onClick={buttonHandler}>-</button>
            <button onClick={buttonHandler}>*</button>
            <button onClick={buttonHandler}>/</button>
            <button onClick={buttonHandler}>(</button>
            <button onClick={buttonHandler}>)</button>
          </div>
          <button onClick={clearInput} className="btnClear">Clear</button>
          <button onClick={solveEquation} className="btnSolve">Solve</button>
          <button onClick={backInput}>Back</button>
        </div>
      </section>
    </div>
  );
}

export default App;
