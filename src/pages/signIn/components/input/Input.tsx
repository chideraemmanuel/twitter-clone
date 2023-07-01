import "./Input.scss";
import { FiEye } from "react-icons/fi";

interface Props {
  type: string;
  label: string;
}

const Input: React.FC<Props> = ({ type, label }) => {
  return (
    <div className="input">
      <input type={type} id={label} />

      <label htmlFor={label}>{label}</label>

      {type === "password" && <FiEye />}
    </div>
  );
};

export default Input;
