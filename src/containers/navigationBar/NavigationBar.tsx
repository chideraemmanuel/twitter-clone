import Logo from "../../components/logo/Logo";
import "./NavigationBar.scss";
import DesktopNavigation from "./components/desktopNavigation/DesktopNavigation";
import MobileNavigation from "./components/mobileNavigation/MobileNavigation";
import NavigationLink from "./components/navigationLink/NavigationLink";
import { navigationConstants } from "./constants";
import { FaFeather } from "react-icons/fa";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default NavigationBar;
