import { Textfit } from "react-textfit";
import "../styles/Display.css";

const Display = ({ value }) => {
  return (
    <Textfit className="display" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Display;