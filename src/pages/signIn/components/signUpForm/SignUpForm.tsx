import "./SignUpForm.scss";
import Button from "../button/Button";
import { FaApple, FaGoogle } from "react-icons/fa";
import Input from "../input/Input";

const SignUpForm: React.FC = () => {
  return (
    <div className="sign-up-form">
      <h2>Join Twitter today</h2>

      <div className="sign-up-form__providers">
        <Button text="Sign in with Google" icon={FaGoogle} />
        <Button text="Sign in with Apple" icon={FaApple} />
      </div>

      <div className="login-form__division">
        <div></div>
        <span>or</span>
        <div></div>
      </div>

      <Button text="Create account" dark />

      <p>
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use
      </p>
    </div>
  );
};

export default SignUpForm;
