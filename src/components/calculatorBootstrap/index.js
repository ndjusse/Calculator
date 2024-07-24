
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Equals = () => {
  return <button className="btn btn-success letter-equals">=</button>;
};

const Clear = () => {
  return <button className="btn btn-danger letter-clear">C</button>;
};

const Operations = () => {
  const operations = [
    { symbol: "+", letter: "add" },
    { symbol: "-", letter: "subtract" },
    { symbol: "×", letter: "multiply" },
    { symbol: "÷", letter: "divide" }
  ];

  return (
    <>
      {operations.map(({ letter, symbol }) => (
        <button key={letter} className={`btn btn-warning letter-${letter}`}>
          {symbol}
        </button>
      ))}
    </>
  );
};

const Numbers = () => {
  const numbers = [
    { number: "0", letter: "zero" },
    { number: "1", letter: "one" },
    { number: "2", letter: "two" },
    { number: "3", letter: "three" },
    { number: "4", letter: "four" },
    { number: "5", letter: "five" },
    { number: "6", letter: "six" },
    { number: "7", letter: "seven" },
    { number: "8", letter: "eight" },
    { number: "9", letter: "nine" },
    { number: ".", letter: "decimal" }
  ];

  return (
    <>
      {numbers.map(({ letter, number }) => (
        <button key={letter} className={`btn btn-secondary letter-${letter}`}>
          {number}
        </button>
      ))}
    </>
  );
};

const Display = () => {
  return <div className="display">HELLO WORLD</div>;
};

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <div class="buttons">
        <Equals />
        <Clear />
        <Numbers />
        <Operations />
      </div>
    </div>
  );
};


