import "./App.css";
import { useEffect, useState } from "react";
import { numbers, operators, buttonsData } from "./data/data";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [calculateDataTemp, setCalculateDataTemp] = useState("");
  const [calculateData, setCalculateData] = useState("");

  // handleInput
  const handleInput = (value) => {
    const isNumber = numbers?.includes(value);
    const isOperator = operators?.includes(value);

    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case ".":
        handleDot();
        break;
      default:
        if (isNumber) {
          handleNumbers(value);
        } else if (isOperator) {
          handleOperators(value);
        }
        break;
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setCalculateDataTemp("");
    setCalculateData("");
  };

  useEffect(() => {
    const lastChar = input[input.length - 1];
    const beforeLastChar = input[input.length - 2];
    const isLastCharNumber = numbers?.includes(parseInt(lastChar));
    const isBeforeLastCharOp = operators?.includes(beforeLastChar);

    if (isLastCharNumber && isBeforeLastCharOp) {
      setCalculateDataTemp((prev) => prev + input.slice(0, -2));
      setInput(input.slice(-2));
    } else if (isBeforeLastCharOp) {
      setCalculateDataTemp((prev) => prev + input.slice(0, -1));
      setInput(input[input.length - 1]);
    }
  }, [input]);

  const handleNumbers = (number) => {
    const value = number.toString();
    // const lastChar = input[input.length - 1];
    // const beforeLastChar = input[input.length - 2];

    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleDot = () => {
    const lastChar = input[input.length - 1];
    // const beforeLastChar = input[input.length - 2];
    const isLastCharOp = operators?.includes(lastChar);
    // const isBeforeLastCharOp = operators?.includes(beforeLastChar);
    const inputHasDot = input.includes(".");

    if (input === "" || input === "0") {
      setInput("0.");
    } else if (isLastCharOp && lastChar === ".") {
      setInput(input + "0.");
    } else if (inputHasDot) {
      setInput(input);
    } else {
      setInput(input + ".");
    }
  };

  const handleOperators = (value) => {
    const lastChar = input[input.length - 1];
    const beforeLastChar = input[input.length - 2];
    const isLastCharNumber = numbers?.includes(parseInt(lastChar));

    if (isLastCharNumber) {
      setInput(input + value);
    } else if (lastChar === value) {
      setInput(input);
    } else {
      if (lastChar === "-" && (value === "/" || value === "*")) {
        setInput(input.slice(0, -1) + "-");
      } else if (lastChar === "*" && value === "/") {
        setInput(input.slice(0, -1) + value);
      } else if ((lastChar === "/") & (value === "*")) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    }
  };

  const handleSubmit = () => {
    if (input !== "") {
      setCalculateDataTemp((prev) => prev + input);
      setInput("");
    }

    const data = calculateDataTemp + input;
    const total = getTotal(data);
    setOutput(total);
    setCalculateData(data);
  };

  const getTotal = (data) => {
    const total = eval(data);
    return total;
  };

  return (
    <div className="app">
      <div className="outputContainer">
        <div id="display" className="displayOne">
          {calculateDataTemp || "0"}
        </div>
        <div id="display" className="display">
          {input || "0"}
        </div>
        <div id="result" className="result">
          {output ? output : "0"}
        </div>
      </div>
      <div className="grid-item">
        {buttonsData.map((button) => (
          <button
            key={button.id}
            id={button.id}
            className="buttonNumber"
            onClick={() => handleInput(button.value)}
          >
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
