// const [input, setInput] = useState("0");
// const [output, setOutput] = useState("");
// const [calculateData, setCalculateData] = useState("");

// // handleInput
// const handleInput = (value) => {
//   const isNumber = numbers.includes(value);
//   const isOperator = operators.includes(value);

//   switch (value) {
//     case "=":
//       handleSubmit();
//       break;
//     case "AC":
//       handleClear();
//       break;
//     case ".":
//       handleDot();
//       break;
//     default:
//       if (isNumber) {
//         handleNumbers(value);
//       } else if (isOperator) {
//         handleOperators(value);
//       }
//       break;
//   }
// };

// const handleClear = () => {
//   setInput("0");
//   setOutput("0");
//   setCalculateData("");
// };

// const handleNumbers = (value) => {
//   if (!calculateData.length) {
//     setInput(`${value}`);
//     setCalculateData(`${value}`);
//   } else {
//     if (value === 0 && (calculateData === "0" || input === "0")) {
//       setCalculateData(`${calculateData}`);
//     } else {
//       const lastChar = calculateData[calculateData.length - 1];
//       const isLastOperator = operators.includes(lastChar);
//       // const hasDecimal = input.includes(".");

//       setInput(isLastOperator ? `${value}` : `${input}${value}`);
//       setCalculateData(`${calculateData}${value}`);
//     }
//   }
// };
// const handleOperators = (value) => {};

// const handleDot = () => {
//   const lastChar = input[input.length - 1];
//   const hasDecimal = input.includes(".");

//   if (!hasDecimal) {
//     setInput((prev) => prev + ".");
//   } else if (
//     operators.includes(lastChar) ||
//     lastChar === "-" ||
//     lastChar === "+"
//   ) {
//     setInput((prev) => prev + "0.");
//   }
// };

// // output

// const handleOutput = () => {
//   setOutput(calculateData);
// };

// useEffect(() => {
//   handleOutput();
// }, [calculateData]);

// const handleSubmit = () => {
//   console.log("submit");
//   // const result = eval(input).toString();
//   // setOutput(result);
//   // setCalculateData(result);
// };
