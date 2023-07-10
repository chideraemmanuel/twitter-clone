import { FaApple, FaGoogle } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import "./LoginForm.scss";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "../../../../redux/store";
import {
  nextLoginStep,
  setCurrentUser,
  setLoginEmail,
  setLoginPassword,
  toggleActiveForm,
} from "../../../../redux/slices/signInSlice";
import { getDocs, query, where } from "firebase/firestore";
import { auth, usersCollectionReference } from "../../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithProvider } from "../../../../utils/signInWithProvider";

const LoginForm: React.FC = () => {
  const {
    step,
    loginInfo: { email, password },
  } = useSelector((store: StoreTypes) => store.signIn.loginForm);

  const dispatch = useDispatch();

  const handleNext = async () => {
    if (email === "") return;
    // await account existence confirmation then **
    const q = query(usersCollectionReference, where("email", "==", email));
    const response = await getDocs(q);
    console.log(response);
    // console.log(response.docs[0].data());
    // console.log(response.docs[0].exists());
    // if (response.docs[0].data()) {
    //   dispatch(nextLoginStep());
    // }
    if (response.docs.length > 0) {
      dispatch(nextLoginStep());
    } else {
      // MANUAL MAIL DOES'NOT HAVE AN ACCOUNT
      // throw error
      console.log("no manual account, cannot move to next");
    }
  };

  const handleManualLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
    } catch (error) {
      console.log("my error", error.message);
      // FirebaseError: Firebase: Error (auth/wrong-password).
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signInWithProvider("google");

    // CHECK IF GOOGLE MAIL HAS AN ACCOUNT
    const q = query(
      usersCollectionReference,
      where("email", "==", result?.user.email)
    );
    const response = await getDocs(q);
    // console.log(response);

    if (response.docs.length > 0) {
      // google mail has an account
      dispatch(setCurrentUser(true));
    } else {
      // GOOGLE MAIL DOESN'T HAVE AN ACCOUNT
      // throw error
      console.log("no google account, cannot login");
    }
  };

  return (
    <>
      {step === 1 && (
        <div className="login-form">
          <h2>Sign in to Twitter</h2>
          <div className="login-form__providers">
            <Button
              text="Sign in with Google"
              icon={FcGoogle}
              onClick={handleGoogleLogin}
            />
            <Button text="Sign in with Apple" icon={FaApple} />
          </div>

          <div className="login-form__division">
            <div></div>
            <span>or</span>
            <div></div>
          </div>

          <div className="login-form__credentials">
            <div className="login-form__credentials--input">
              <Input
                type="text"
                label="Phone, email or username"
                value={email}
                setValue={setLoginEmail}
              />
              {/* <span>Error message</span> */}
            </div>
            <Button text="Next" type="dark" onClick={handleNext} />
            <Button
              text="Forgot password?"
              onClick={() => alert("Omo, na you sabi o")}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="login-validation">
          <h2>Enter your password</h2>

          <div className="login-validation__top">
            <span>Email</span>
            <span>{email}</span>
          </div>

          <Input
            type="password"
            label="password"
            value={password}
            setValue={setLoginPassword}
          />

          <Button text="Login" type="dark" onClick={handleManualLogin} />
        </div>
      )}

      <div className="login-footer">
        <p>
          Don't have an account?{" "}
          <span onClick={() => dispatch(toggleActiveForm())}>Sign up</span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
