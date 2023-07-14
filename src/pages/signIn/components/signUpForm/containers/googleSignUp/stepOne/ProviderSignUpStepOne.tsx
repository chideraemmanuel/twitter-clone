import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import Input from "../../../../input/Input";
import "./ProviderSignUpStepOne.scss";
import {
  nextProviderSignInStep,
  setDOB,
} from "../../../../../../../redux/slices/signInSlice";
import { StoreTypes } from "../../../../../../../redux/store";

const ProviderSignUpStepOne: React.FC = () => {
  const dispatch = useDispatch();

  const { DOB } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const handleNext = () => {
    // FIELD VALIDATION
    if (DOB === "") {
      alert("Please enter your date of birth");
      return;
    }
    dispatch(nextProviderSignInStep());
  };

  return (
    <div className="providerSignUpStepOne">
      <div className="providerSignUpStepOne__form">
        <FormTitle text="What's your birth date?" />
        <p>This won't be public</p>

        <div className="providerSignUpStepOne__form--input">
          <Input type="date" value={DOB} setValue={setDOB} />
        </div>
      </div>

      <Button text="Next" type="dark" onClick={handleNext} />
    </div>
  );
};

export default ProviderSignUpStepOne;
