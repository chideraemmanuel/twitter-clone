import "./NavigationLink.scss";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { NavigationTypes } from "../../constants";

const NavigationLink: React.FC<NavigationTypes> = ({
  title,
  icon: Icon,
  activeIcon: ActiveIcon,
}) => {
  return (
    <NavLink to={`/${title}`} className="navigation-link">
      <div className="navigation-link__icon">
        <Icon />
        <ActiveIcon />
      </div>
      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationLink;
