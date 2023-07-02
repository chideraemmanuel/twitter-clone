import { Link, Navigate } from "react-router-dom";
import "./SignIn.scss";
import CardLayout from "./components/card/CardLayout";
import LoginForm from "./components/loginForm/LoginForm";
import SignUpForm from "./components/signUpForm/SignUpForm";
import { auth } from "../../config/firebase";
import { useSelector } from "react-redux";
import { StoreTypes } from "../../redux/store";
import Logo from "../../components/logo/Logo";
import { FaTimes } from "react-icons/fa";

const user = false;

const SignIn: React.FC = () => {
  const { signUpForm } = useSelector((store: StoreTypes) => store.signIn);

  if (auth.currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="sign-in">
      <div className="sign-in__overlay"></div>

      <CardLayout header={<Logo />} icon={FaTimes}>
        {signUpForm.active && <SignUpForm />}
        {/* <LoginForm /> */}

        {/* <div className="sign-in__footer">
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
        </div> */}
      </CardLayout>
    </div>
  );
};

export default SignIn;
