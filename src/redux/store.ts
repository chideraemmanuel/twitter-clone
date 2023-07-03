import { configureStore } from "@reduxjs/toolkit";
import signInReducer, { SignInStateTypes } from "../redux/slices/signInSlice";
import navigationReducer, {
  NavigationStateTypes,
} from "./slices/navigationSlice";

export interface StoreTypes {
  signIn: SignInStateTypes;
  navigation: NavigationStateTypes;
}

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    navigation: navigationReducer,
  },
});
