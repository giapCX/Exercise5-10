import { useState } from "react";

function Calculator() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {

    const a = Number(number1);
    const b = Number(number2);

    let answer;

    switch (operator) {

      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":

        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }

        answer = a / b;
        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  return (
    <div className="exercise-box">

      <h2>2. Calculator</h2>

      <div className="calculator">

        <input
          type="number"
          value={number1}
          placeholder="Number 1"
          onChange={(e) => setNumber1(e.target.value)}
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >

          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>

        </select>

        <input
          type="number"
          value={number2}
          placeholder="Number 2"
          onChange={(e) => setNumber2(e.target.value)}
        />

        <button onClick={calculate}>
          Calculate
        </button>

      </div>

      <h3>
        Result: {result}
      </h3>

    </div>
  );
}

export default Calculator;