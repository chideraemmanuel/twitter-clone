import "./NavigationLink.scss";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  icon: IconType;
}

const NavigationLink: React.FC<Props> = ({ title, icon: Icon }) => {
  return (
    <Link to={`/${title}`} className="navigation-link">
      <Icon />
      <span>{title}</span>
    </Link>
  );
};

export default NavigationLink;
