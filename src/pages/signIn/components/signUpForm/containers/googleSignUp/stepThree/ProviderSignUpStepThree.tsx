import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ProviderSignUpStepThree.scss";
import {
  nextProviderSignInStep,
  setUsername,
} from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";
import { StoreTypes } from "../../../../../../../redux/store";

const ProviderSignUpStepThree: React.FC = () => {
  const dispatch = useDispatch();

  const { username } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  return (
    <div className="providerSignUpStepThree">
      <div className="providerSignUpStepThree__form">
        <FormHeader text="What should we call you?" />
        <p>Your @username is unique. You can always change it later.</p>

        <Input
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextProviderSignInStep())}
      />
    </div>
  );
};

export default ProviderSignUpStepThree;
