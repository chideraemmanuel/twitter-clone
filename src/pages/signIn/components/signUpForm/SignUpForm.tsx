import "./SignUpForm.scss";
import Button from "../button/Button";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../input/Input";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import SignUpInitial from "./containers/initial/SignUpInitial";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import ManualSignUp from "./containers/manualSignUp/ManualSignUp";

const SignUpForm: React.FC = () => {
  const {
    signUpForm: {
      active,
      initialPageActive,
      type: { manual, google },
    },
  } = useSelector((store: StoreTypes) => store.signIn);

  return (
    <div className="sign-up-form">
      {active && initialPageActive && <SignUpInitial />}

      {manual.active && <ManualSignUp />}
    </div>
  );
};

export default SignUpForm;