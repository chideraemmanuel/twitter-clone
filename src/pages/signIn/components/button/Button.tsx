import { Dispatch } from "react";
import { IconType } from "react-icons";
import "./Button.scss";

interface Props {
  text: string;
  icon?: IconType;
  type?: "dark" | "primary";
  disabled?: boolean;
  onClick: () => Promise<void> | any;
}

const Button: React.FC<Props> = ({
  text,
  icon: Icon,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button className={`button ${type}`} onClick={onClick} disabled={disabled}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
