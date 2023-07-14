import { useSelector } from "react-redux";
import { StoreTypes } from "../redux/store";
import { Navigate } from "react-router-dom";

const Router = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  // if (!currentUser.isLoading && !currentUser.active) {
  //   return <Navigate to="/login" replace />;
  // } else {
  //   <Navigate to="/home" replace />;
  // }

  return (
    <>
      {currentUser.active ? <Navigate to="/home" /> : <Navigate to="/login" />}
    </>
  );
};

export default Router;
