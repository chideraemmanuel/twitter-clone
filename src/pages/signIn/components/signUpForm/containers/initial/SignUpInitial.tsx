import { useNavigate } from "react-router-dom";
import "./SignUpInitial.scss";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../../../../../config/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "../../../button/Button";
import FormHeader from "../../../formHeader/FormHeader";
import FormDivision from "../../../formDivision/FormDivision";
import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  setEmail,
  setName,
  setProviderId,
  startCreateAccount,
  startProviderSignUp,
} from "../../../../../../redux/slices/signInSlice";
import { signInWithProvider } from "../../../../../../utils/signInWithProvider";
import { useEffect } from "react";
import { subscribe } from "../../../../../../utils/onAuthStateChange";

const SignUpInitial: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoogleSignUp = async () => {
    // UNSUBSCRIBE THEN 👇🏾
    const result = await signInWithProvider("google");
    dispatch(setProviderId("google.com"));
    dispatch(startProviderSignUp({ provider: "google" }));
    dispatch(setName(result?.user.displayName));
    dispatch(setEmail(result?.user.email));
  };

  const handleAppleSignUp = async () => {
    const result = await signInWithProvider("apple");
    dispatch(setProviderId("apple.com"));
    dispatch(startProviderSignUp({ provider: "apple" }));
    dispatch(setName(result?.user.displayName));
    dispatch(setEmail(result?.user.email));
  };

  return (
    <div className="sign-up-initial">
      <FormHeader text="Join Twitter today" />

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
        Already have an account? <span>Log in</span>
      </p>
    </div>
  );
};

export default SignUpInitial;
