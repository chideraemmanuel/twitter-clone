import { useNavigate } from "react-router-dom";
import "./SignUpInitial.scss";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  auth,
  googleProvider,
  usersCollectionReference,
} from "../../../../../../config/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "../../../button/Button";
import FormTitle from "../../../formTitle/FormTitle";
import FormDivision from "../../../formDivision/FormDivision";
import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  setEmail,
  setName,
  setProviderId,
  setUID,
  startCreateAccount,
  startProviderSignUp,
  toggleActiveForm,
} from "../../../../../../redux/slices/signInSlice";
import { signInWithProvider } from "../../../../../../utils/signInWithProvider";
import { useEffect } from "react";
import { subscribe } from "../../../../../../utils/onAuthStateChange";
import { getDocs, query, where } from "firebase/firestore";

const SignUpInitial: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithProvider("google");

      // CHECK IF GOOGLE MAIL HAS AN ACCOUNT
      const q = query(
        usersCollectionReference,
        where("email", "==", result?.user.email)
      );
      // const isConnected = checkInternetConnectionStatus()

      try {
        if (!navigator.onLine) {
          alert("Please check your internet connection");
          return;
        }

        const response = await getDocs(q);
        // console.log(response);

        if (response.docs.length > 0) {
          // GOOGLE MAIL HAS AN ACCOUNT
          // THROW ERROR
          alert("Account already in use.");
          console.log("account already in use");
          return;
        } else {
          // GOOGLE MAIL DOESN'T HAVE AN ACCOUNT
          // CONTINUE SIGN UP
          dispatch(setUID(result?.user.uid));
          dispatch(setProviderId("google.com"));
          dispatch(startProviderSignUp({ provider: "google" }));
          dispatch(setName(result?.user.displayName));
          dispatch(setEmail(result?.user.email));
        }
      } catch (error) {
        alert("An error occured during account verification");
        console.log(error);
      }
    } catch (error) {
      alert("An error occured during sign in");
      console.log(error);
      return;
    }
  };

  const handleAppleSignUp = async () => {
    const result = await signInWithProvider("apple");

    if (result) {
      // CHECK IF APPLE ID HAS AN ACCOUNT
      const q = query(
        usersCollectionReference,
        where("email", "==", result?.user.email)
      );
      const response = await getDocs(q);
      // console.log(response);

      if (response.docs.length > 0) {
        // APPLE ID HAS AN ACCOUNT
        // THROW ERROR
        alert("Account already in use.");
        console.log("account already in use");
        return;
      } else {
        // APPLE ID DOESN'T HAVE AN ACCOUNT
        // CONTINUE SIGN UP

        dispatch(setProviderId("apple.com"));
        dispatch(startProviderSignUp({ provider: "apple" }));
        dispatch(setName(result?.user.displayName));
        dispatch(setEmail(result?.user.email));
      }
    } else {
      // NO RESULT, DO NOTHING
      // ULTIMATELY, THROW AN ERROR
      alert("An error occured.");
      console.log("an error occured");
      return;
    }
  };

  return (
    <div className="sign-up-initial">
      <FormTitle text="Join Twitter today" />

      <div className="sign-up-initial__providers">
        <Button
          text="Sign up with Google"
          icon={FcGoogle}
          onClick={handleGoogleSignUp}
        />
        <Button
          text="Sign up with Apple"
          icon={FaApple}
          onClick={handleAppleSignUp}
        />
      </div>

      <FormDivision />

      <Button
        text="Create account"
        type="dark"
        onClick={() => dispatch(startCreateAccount())}
      />

      <p>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use
      </p>

      <p className="sign-up-initial__footer">
        Already have an account?{" "}
        <span onClick={() => dispatch(toggleActiveForm())}>Log in</span>
      </p>
    </div>
  );
};

export default SignUpInitial;
