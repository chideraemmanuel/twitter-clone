import { useSelector } from "react-redux";
import { StoreTypes } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  //   if (!currentUser.active) {
  //     return <Navigate to="/login" replace />;
  //   }

  return (
    <>
      {currentUser.active && !currentUser.isLoading ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace />
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default ProtectedRoutes;
