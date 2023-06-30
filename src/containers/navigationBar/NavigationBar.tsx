import Logo from "../../components/logo/Logo";
import "./NavigationBar.scss";
import NavigationLink from "./components/navigationLink/NavigationLink";
import { navigationConstants } from "./constants";
import { FaFeather } from "react-icons/fa";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>

      <div className="navbar__navigation">
        <ul className="navbar__navigation--links">
          {navigationConstants.map((item, index) => (
            <li key={index}>
              <NavigationLink {...item} />
            </li>
          ))}
        </ul>

        <button className="navbar__navigation--button">
          <FaFeather />
          <span>Tweet</span>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
