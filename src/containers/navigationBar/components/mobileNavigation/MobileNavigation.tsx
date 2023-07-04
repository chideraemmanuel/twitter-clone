import { Link, NavLink } from "react-router-dom";
import { mobileNavigationConstants } from "../../constants";
import "./MobileNavigation.scss";
import MobileSideMenu from "./mobileSideMenu/MobileSideMenu";
import MobileTweetButton from "./mobileTweetButton/MobileTweetButton";

const MobileNavigation: React.FC = () => {
  return (
    <>
      <MobileSideMenu />
      {/* <MobileTweetButton /> */}

      <div className="mobileNavigation">
        {mobileNavigationConstants.map((item) => (
          <NavLink to={item.title} className="mobileNavigation__link">
            <item.icon />
            <item.activeIcon />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default MobileNavigation;
