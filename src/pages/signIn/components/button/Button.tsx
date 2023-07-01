import { IconType } from "react-icons";
import "./Button.scss";

interface Props {
  text: string;
  icon?: IconType;
  dark?: boolean;
}

const Button: React.FC<Props> = ({ text, icon: Icon, dark }) => {
  return (
    <button className={dark ? "button dark" : "button"}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
