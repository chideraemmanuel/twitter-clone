import { useDispatch } from "react-redux";
import "./Input.scss";
import { FiEye } from "react-icons/fi";

interface Props {
  type: string;
  label?: string;
  value: any;
  setValue: any;
}

const Input: React.FC<Props> = ({ type, label, value, setValue }) => {
  const dispatch = useDispatch();

  return (
    <div className="input">
      <input
        type={type}
        id={label}
        placeholder={label}
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />

      {/* <label htmlFor={label}>{label}</label> */}

      {type === "password" && <FiEye />}
    </div>
  );
};

export default Input;
