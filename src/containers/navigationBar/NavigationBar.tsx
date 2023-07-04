import "./NavigationBar.scss";
import DesktopNavigation from "./components/desktopNavigation/DesktopNavigation";
import MobileNavigation from "./components/mobileNavigation/MobileNavigation";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <DesktopNavigation />
      {/* <MobileSideMenu /> */}
      <MobileNavigation />
    </nav>
  );
};

export default NavigationBar;
