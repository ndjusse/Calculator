import Button from "../Button";
import '../styles/CalculatorBox.css';



const CalculatorBox = ({ children }) => {
  return <div className="calculatorBox">{children}</div>;

};

export default CalculatorBox;