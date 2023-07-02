import { Dispatch } from "react";
import { IconType } from "react-icons";
import "./Button.scss";

interface Props {
  text: string;
  icon?: IconType;
  dark?: boolean;
  onClick: () => Promise<void> | any;
}

const Button: React.FC<Props> = ({ text, icon: Icon, dark, onClick }) => {
  return (
    <button className={dark ? "button dark" : "button"} onClick={onClick}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
