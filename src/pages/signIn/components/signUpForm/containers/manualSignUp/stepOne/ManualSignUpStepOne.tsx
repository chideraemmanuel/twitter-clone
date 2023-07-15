import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import Input from "../../../../input/Input";
import "./ManualSignUpStepOne.scss";
import {
  nextManualSignInStep,
  setDOB,
  setEmail,
  setName,
} from "../../../../../../../redux/slices/signInSlice";
import { StoreTypes } from "../../../../../../../redux/store";
import { getDocs, query, where } from "firebase/firestore";
import { usersCollectionReference } from "../../../../../../../config/firebase";

const ManualSignUpStepOne: React.FC = () => {
  const dispatch = useDispatch();

  const { name, email, DOB } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const handleNext = async () => {
    // MINOR FIELD VALIDATIONS
    if (name === "") {
      alert("Please enter your name");
      return;
    } else if (email === "") {
      alert("Please enter your email");
      return;
    } else if (DOB === "") {
      alert("Please enter your date of birth");
      return;
    }

    // CHECK IF ACCOUNT EXISTS
    const q = query(usersCollectionReference, where("email", "==", email));

    try {
      if (!navigator.onLine) {
        alert("Please check your internet connection");
        return;
      }

      const response = await getDocs(q);
      // console.log(response);
      // if (!response) return;

      if (response.docs.length > 0) {
        // MANUAL MAIL HAS AN ACCOUNT
        // throw error
        alert("Account already in use.");
        console.log("account already in use");
        return;
      } else {
        // MANUAL MAIL DOES NOT HAVE AN ACCOUNT
        // CONTINUE SIGN UP
        dispatch(nextManualSignInStep());
      }
    } catch (error) {
      alert("An error occured during email verification");
      console.log(error);
    }
  };

  return (
    <div className="manualSignUpStepOne">
      <div className="manualSignUpStepOne__form">
        <FormTitle text="Create your account" />

        <div className="manualSignUpStepOne__form--inputs">
          <Input type="text" label="Name" value={name} setValue={setName} />
          <Input type="email" label="Email" value={email} setValue={setEmail} />

          {/* <input type="date" name="" id="" /> */}
          <Input
            type="date"
            value={DOB}
            setValue={setDOB}
            label="Date of birth"
          />
        </div>
      </div>

      <Button text="Next" type="dark" onClick={handleNext} />
    </div>
  );
};

export default ManualSignUpStepOne;
