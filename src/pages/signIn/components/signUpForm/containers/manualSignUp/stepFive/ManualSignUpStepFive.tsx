import { useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import "./ManualSignUpStepFive.scss";
import { StoreTypes } from "../../../../../../../redux/store";
import {
  createAccount,
  userTypes,
} from "../../../../../../../utils/createAccount";
import ConfirmationBox from "../../../../confirmationBox/ConfirmationBox";

const ManualSignUpStepFive: React.FC = () => {
  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  // const signUp = (data: userTypes) => {
  //   createAccountManual(data);
  //   // navigate("/");
  // };

  const { data, isLoading, refetch, error } = createAccount(
    {
      name,
      email,
      DOB,
      username,
      password,
    },
    "manual"
  );

  console.log("Data", data);
  console.log("isLoading", isLoading);
  console.log("Error", error);

  return (
    <div className="manualSignUpStepFive">
      <div className="manualSignUpStepFive__top">
        <FormTitle text="Create your account" />

        {/* CONFIRMATION */}
        <div className="manualSignUpStepFive__top--confirmation">
          <ConfirmationBox label="name" value={name} />
          <ConfirmationBox label="email" value={email} />
          <ConfirmationBox label="date of birth" value={DOB} />
          <ConfirmationBox label="username" value={username} />
        </div>
      </div>

      <div className="manualSignUpStepFive__bottom">
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
          text={isLoading ? "Creating account..." : "Sign up"}
          disabled={isLoading}
          type="primary"
          // onClick={() => signUp({ name, email, DOB, username, password })}
          onClick={() => refetch()}
        />
      </div>
    </div>
  );
};

export default ManualSignUpStepFive;
