import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormTitle from "../../../../formTitle/FormTitle";
import "./ProviderSignUpStepThree.scss";
import {
  nextProviderSignInStep,
  setUsername,
} from "../../../../../../../redux/slices/signInSlice";
import Input from "../../../../input/Input";
import { StoreTypes } from "../../../../../../../redux/store";
import { getDocs, query, where } from "firebase/firestore";
import { usersCollectionReference } from "../../../../../../../config/firebase";

const ProviderSignUpStepThree: React.FC = () => {
  const dispatch = useDispatch();

  const { username } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const handleNext = async () => {
    if (username === "") {
      alert("Please pick a username");
      return;
    }

    // CHECK IF USERNAME IS AVAILABLE
    const q = query(
      usersCollectionReference,
      where("username", "==", username)
    );

    try {
      const response = await getDocs(q);
      // console.log(response);

      if (response.docs.length > 0) {
        // USERNAME IS NOT AVAILABLE
        // PICK SOMETHING ELSE
        alert("Username is already in use. Try something else.");
        return;
      } else {
        // USERNAME IS AVAILABLE
        // CONTINUE SIGN UP
        dispatch(nextProviderSignInStep());
      }
    } catch (error) {
      alert("An error occured during username validation");
      console.log(error);
    }
  };

  return (
    <div className="providerSignUpStepThree">
      <div className="providerSignUpStepThree__form">
        <FormTitle text="What should we call you?" />
        <p>Your @username is unique. You can always change it later.</p>

        <Input
          type="text"
          label="Username"
          value={username}
          setValue={setUsername}
        />
      </div>

      <Button text="Next" type="dark" onClick={handleNext} />
    </div>
  );
};

export default ProviderSignUpStepThree;
