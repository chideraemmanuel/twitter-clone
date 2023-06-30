import "./NavigationLink.scss";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  icon: IconType;
}

const NavigationLink: React.FC<Props> = ({ title, icon: Icon }) => {
  return (
    <NavLink to="/" className="navigation-link">
      <Icon />
      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationLink;
