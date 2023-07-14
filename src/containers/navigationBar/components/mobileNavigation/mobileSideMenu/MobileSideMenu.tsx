import { mobileSideMenuConstants } from "../../../constants";
import "./MobileSideMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../../redux/store";
import { closeMobileMenu } from "../../../../../redux/slices/navigationSlice";
import ProfileImageAlt from "../../../../../components/profileImageAlt/ProfileImageAlt";
import NavigationLink from "../../navigationLink/NavigationLink";
import useGetUser from "../../../../../hooks/useGetUser";
import { auth } from "../../../../../config/firebase";
import { FiX } from "react-icons/fi";

const MobileSideMenu: React.FC = () => {
  const { mobileMenuOpen } = useSelector(
    (store: StoreTypes) => store.navigation
  );

  const dispatch = useDispatch();

  // @ts-ignore
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
        <div className="mobileSideMenu__header">
          <h4>Account info</h4>
          <div
            className="mobileSideMenu__header--icon"
            onClick={() => dispatch(closeMobileMenu())}
          >
            <FiX />
          </div>
        </div>
        {currentUser && (
          <div className="mobileSideMenu__profile">
            <ProfileImageAlt />
            <div className="mobileSideMenu__profile--name">
              {/* @ts-ignore */}
              <span>{currentUser.name}</span>
              {/* @ts-ignore */}
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
        </div>

        <div className="mobileSideMenu__dropdowns"></div>
      </div>
    </>
  );
};

export default MobileSideMenu;
