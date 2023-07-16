import { useSelector } from "react-redux";
import { StoreTypes } from "../redux/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  const location = useLocation();

  // console.log(location);

  //   if (!currentUser.active) {
  //     return <Navigate to="/login" replace />;
  //   }

  return (
    <>
      {currentUser.active && !currentUser.isLoading ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default ProtectedRoutes;
