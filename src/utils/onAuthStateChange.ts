import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const subscribe = (dispatch, setCurrentUser) => {
  return onAuthStateChanged(auth, (user) => {
    console.log("unsub");
    console.log(user);
    if (user) {
      dispatch(setCurrentUser(true));
    } else {
      dispatch(setCurrentUser(false));
    }
  });
};
