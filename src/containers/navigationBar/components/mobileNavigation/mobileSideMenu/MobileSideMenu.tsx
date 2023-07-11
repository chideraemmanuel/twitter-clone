import {
  mobileSideMenuConstants,
  navigationConstants,
} from "../../../constants";
import "./MobileSideMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../../redux/store";
import { closeMobileMenu } from "../../../../../redux/slices/navigationSlice";
import ProfileImageAlt from "../../../../../components/profileImageAlt/ProfileImageAlt";
import NavigationLink from "../../navigationLink/NavigationLink";
import useGetUser from "../../../../../hooks/useGetUser";
import { auth } from "../../../../../config/firebase";

const MobileSideMenu: React.FC = () => {
  const { mobileMenuOpen } = useSelector(
    (store: StoreTypes) => store.navigation
  );

  const dispatch = useDispatch();

  const { data: currentUser } = useGetUser(auth.currentUser?.uid);

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="mobileSideMenu-overlay"
          onClick={() => dispatch(closeMobileMenu())}
        ></div>
      )}

      <div
        className={mobileMenuOpen ? "mobileSideMenu active" : "mobileSideMenu"}
      >
        {/* <div className="mobileSideMenu__logo">
        <Logo />
    </div> */}
        {currentUser && (
          <div className="mobileSideMenu__profile">
            <ProfileImageAlt />
            <div className="mobileSideMenu__profile--name">
              <span>{currentUser.name}</span>
              <span>@{currentUser.username}</span>
            </div>
          </div>
        )}

        <div className="mobileSideMenu__navigation">
          <ul className="mobileSideMenu__navigation--links">
            {mobileSideMenuConstants.map((item, index) => (
              <li key={index}>
                <NavigationLink {...item} />
              </li>
            ))}
          </ul>

          {/* <button className="mobileSideMenu__navigation--button">Tweet</button> */}
        </div>
      </div>
    </>
  );
};

export default MobileSideMenu;
