import { configureStore } from "@reduxjs/toolkit";
import signInReducer, { signInStateTypes } from "../redux/slices/signInSlice";

export interface StoreTypes {
  signIn: signInStateTypes;
}

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
