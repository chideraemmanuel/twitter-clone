import { FaFeather } from "react-icons/fa";
import Logo from "../../../../components/logo/Logo";
import { navigationConstants } from "../../constants";
import NavigationLink from "../navigationLink/NavigationLink";
import "./DesktopNavigation.scss";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="desktopNavigation">
      <div className="desktopNavigation__logo">
        <Logo />
      </div>

      <div className="desktopNavigation__navigation">
        <ul className="desktopNavigation__navigation--links">
          {navigationConstants.map((item, index) => (
            <li key={index}>
              <NavigationLink {...item} />
            </li>
          ))}
        </ul>

        <button className="desktopNavigation__navigation--button">
          <FaFeather />
          <span>Tweet</span>
        </button>
      </div>
    </div>
  );
};

export default DesktopNavigation;
