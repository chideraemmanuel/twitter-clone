import { Link } from "react-router-dom";
import "./SignIn.scss";
import CardLayout from "./components/card/CardLayout";
import LoginForm from "./components/loginForm/LoginForm";
import SignUpForm from "./components/signUpForm/SignUpForm";

const SignIn: React.FC = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__overlay"></div>

      <CardLayout>
        <SignUpForm />
        {/* <LoginForm /> */}

        <div className="sign-in__footer">
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
          {/* <p>
            Already have an account? <span>Log in</span>
          </p> */}
        </div>
      </CardLayout>
    </div>
  );
};

export default SignIn;
