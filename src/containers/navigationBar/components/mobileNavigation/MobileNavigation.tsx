import { NavLink } from "react-router-dom";
import { mobileNavigationConstants } from "../../constants";
import "./MobileNavigation.scss";
import MobileSideMenu from "./mobileSideMenu/MobileSideMenu";

const MobileNavigation: React.FC = () => {
  return (
    <>
      <MobileSideMenu />

      <div className="mobileNavigation">
        {mobileNavigationConstants.map((item) => (
          <NavLink
            to={item.title}
            className="mobileNavigation__link"
            key={item.title}
          >
            <item.icon />
            <item.activeIcon />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default MobileNavigation;
