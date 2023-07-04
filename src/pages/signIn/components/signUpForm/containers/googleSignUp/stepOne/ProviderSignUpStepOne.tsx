import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import Input from "../../../../input/Input";
import "./ProviderSignUpStepOne.scss";
import {
  nextProviderSignInStep,
  setDOB,
  setEmail,
  setName,
} from "../../../../../../../redux/slices/signInSlice";
import { StoreTypes } from "../../../../../../../redux/store";

const ProviderSignUpStepOne: React.FC = () => {
  const dispatch = useDispatch();

  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  return (
    <div className="providerSignUpStepOne">
      <div className="providerSignUpStepOne__form">
        <FormHeader text="What's your birth date?" />
        <p>This won't be public</p>

        <div className="providerSignUpStepOne__form--input">
          <Input type="date" value={DOB} setValue={setDOB} />
        </div>
      </div>

      <Button
        text="Next"
        type="dark"
        onClick={() => dispatch(nextProviderSignInStep())}
      />
    </div>
  );
};

export default ProviderSignUpStepOne;
