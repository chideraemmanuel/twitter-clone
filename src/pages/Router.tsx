import React from "react";
import { useSelector } from "react-redux";
import { StoreTypes } from "../redux/store";
import { Navigate } from "react-router-dom";

const Router = () => {
  const { currentUser } = useSelector((store: StoreTypes) => store.signIn);

  if (!currentUser.isLoading && !currentUser.active) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/home" replace />;
};

export default Router;
