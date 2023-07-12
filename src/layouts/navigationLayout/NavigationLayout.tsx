import "./NavigationLayout.scss";
import { useEffect } from "react";
import NavigationBar from "../../containers/navigationBar/NavigationBar";
import MobileTweetButton from "../../containers/navigationBar/components/mobileNavigation/mobileTweetButton/MobileTweetButton";
import CreateTweet from "../../containers/createTweet/CreateTweet";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import { resetSignInForm } from "../../redux/slices/signInSlice";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../containers/sidebar/Sidebar";

const NavigationLayout = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);
  const { isCreatingTweet } = useSelector((store: StoreTypes) => store.tweet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSignInForm());
  }, []);

  //  NAVIGATE TO LOGIN PAGE IF USER IS NOT AVAILABLE (PROTECTING THE ROUTE)
  if (!currentUser.active) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="navigation-layout">
      <NavigationBar />
      <MobileTweetButton />
      {isCreatingTweet && <CreateTweet />}

      <main className="navigation-layout__main">
        <Outlet />
      </main>

      <Sidebar />
    </div>
  );
};

export default NavigationLayout;
