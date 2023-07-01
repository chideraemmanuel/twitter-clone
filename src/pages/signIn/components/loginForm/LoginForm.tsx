import { FaApple, FaGoogle } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import "./LoginForm.scss";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="login-form">
        <h2>Sign in to Twitter</h2>
        <div className="login-form__providers">
          <Button text="Sign in with Google" icon={FaGoogle} />
          <Button text="Sign in with Apple" icon={FaApple} />
        </div>

        <div className="login-form__division">
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <div className="login-form__credentials">
          <div className="login-form__credentials--input">
            <Input type="text" label="Phone, email or username" />
            {/* <span>Error message</span> */}
          </div>
          <Button text="Next" dark />
          <Button text="Forgot password?" />
        </div>
      </div>

      {/* <div className="login-validation">
        <h2>Enter your password</h2>

        <div className="login-validation__top">
          <span>Email</span>
          <span>chideraemmanuel@gmail.com</span>
        </div>

        <Input type="password" label="password" />
      </div> */}
    </>
  );
};

export default LoginForm;
