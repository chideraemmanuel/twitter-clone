import { configureStore } from "@reduxjs/toolkit";
import signInReducer, { SignInStateTypes } from "../redux/slices/signInSlice";
import navigationReducer, {
  NavigationStateTypes,
} from "./slices/navigationSlice";
import tweetReducer, { TweetStateTypes } from "../redux/slices/tweetSlice";

export interface StoreTypes {
  signIn: SignInStateTypes;
  navigation: NavigationStateTypes;
  tweet: TweetStateTypes;
}

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    navigation: navigationReducer,
    tweet: tweetReducer,
  },
});
