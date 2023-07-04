import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ProviderSignUpStepFour.scss";
import {
  nextProviderSignInStep,
  setPassword,
} from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";
import { StoreTypes } from "../../../../../../../redux/store";

const ProviderSignUpStepFour: React.FC = () => {
  const dispatch = useDispatch();

  const { password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  return (
    <div className="providerSignUpStepFour">
      <div className="providerSignUpStepFour__form">
        <FormHeader text="Pick a password" />
        <p>Your password will be used to access your account</p>

        <Input
          type="password"
          label="Enter password"
          value={password}
          setValue={setPassword}
        />
        {/* <Input type="password" label="confirm password" /> */}
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextProviderSignInStep())}
      />
    </div>
  );
};

export default ProviderSignUpStepFour;
