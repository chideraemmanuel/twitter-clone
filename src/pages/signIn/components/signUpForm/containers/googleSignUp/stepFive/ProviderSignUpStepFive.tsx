import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import "./ProviderSignUpStepFive.scss";
import { StoreTypes } from "../../../../../../../redux/store";
import {
  useCreateAccount,
  userTypes,
} from "../../../../../../../hooks/useCreateAccount";
import ConfirmationBox from "../../../../confirmationBox/ConfirmationBox";
import {
  resetSignInForm,
  setCurrentUser,
  setProviderId,
} from "../../../../../../../redux/slices/signInSlice";

const ProviderSignUpStepFive: React.FC = () => {
  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const { providerName } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.type.provider
  );

  const { uid } = useSelector((store: StoreTypes) => store.signIn);

  const dispatch = useDispatch();

  // const signUp = (data: userTypes) => {
  //   createAccountManual(data);
  //   // navigate("/");
  // };

  const { mutate: createAccount, isLoading: isCreatingAccount } =
    useCreateAccount();

  // console.log("Data", data);
  // console.log("isLoading", isLoading);
  // console.log("Error", error);

  const handleSignUp = () => {
    if (!navigator.onLine) {
      alert("Please check your internet connection");
      return;
    }

    createAccount({
      data: {
        name,
        email,
        DOB,
        username,
        password,
        uid,
      },
      signUpType: providerName,
    });
    dispatch(setCurrentUser(true));
    dispatch(resetSignInForm());
    // dispatch(setProviderId("google.com"));
  };

  return (
    <div className="providerSignUpStepFive">
      <div className="providerSignUpStepFive__top">
        <FormTitle text="Create your account" />

        {/* CONFIRMATION */}
        <div className="providerSignUpStepFive__top--confirmation">
          {/* <ConfirmationBox label="name" value={name} /> */}
          <ConfirmationBox label="email" value={email} />
          <ConfirmationBox label="date of birth" value={DOB} />
          <ConfirmationBox label="username" value={username} />
        </div>
      </div>

      <div className="providerSignUpStepFive__bottom">
        <p>
          By signing up, you agree to the <span>Terms of Service</span> and
          <span>Privacy Policy</span>, including <span>Cookie Use</span>.
          Twitter may use your contact information, including your email address
          and phone number for the purposes outlined in our Privacy Policy, like
          keeping your account secure and personalizing our services, including
          ads. <span>Learn more</span>. Others will be able to find you by email
          or phone number, when provided, unless you choose otherwise{" "}
          <span>here</span>.
        </p>

        <Button
          text={isCreatingAccount ? "Creating account..." : "Sign up"}
          disabled={isCreatingAccount}
          type="primary"
          // onClick={() => signUp({ name, email, DOB, username, password })}
          // onClick={() => refetch()}
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default ProviderSignUpStepFive;
