import { useNavigate } from "react-router-dom";
import "./SignUpInitial.scss";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../../../../../config/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "../../../button/Button";
import FormHeader from "../../../formHeader/FormHeader";
import FormDivision from "../../../formDivision/FormDivision";
import { useDispatch } from "react-redux";
import { startCreateAccount } from "../../../../../../redux/slices/signInSlice";

const SignUpInitial: React.FC = () => {
  const dispatch = useDispatch();

  //   const navigate = useNavigate();

  //   const signInWithGoogle = async () => {
  //     try {
  //       await signInWithPopup(auth, googleProvider);
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   console.log(auth);
  //   signOut(auth);

  return (
    <div className="sign-up-initial">
      <FormHeader text="Join Twitter today" />

      <div className="sign-up-initial__providers">
        <Button
          text="Sign in with Google"
          icon={FcGoogle}
          //   onClick={signInWithGoogle}
        />
        <Button text="Sign in with Apple" icon={FaApple} />
      </div>

      <FormDivision />

      <Button
        text="Create account"
        dark={true}
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
