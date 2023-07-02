import { useSelector } from "react-redux";
import Button from "../../../../button/Button";
import FormHeader from "../../../../formHeader/FormHeader";
import "./ManualSignUpStepFive.scss";
import { StoreTypes } from "../../../../../../../redux/store";
import {
  createAccountManual,
  userTypes,
} from "../../../../../../../utils/createAccountManual";
import { useNavigate } from "react-router-dom";

const ManualSignUpStepFive: React.FC = () => {
  const { name, email, DOB, username, password } = useSelector(
    (store: StoreTypes) => store.signIn.signUpForm.userInfo
  );

  const navigate = useNavigate();

  const signUp = (data: userTypes) => {
    createAccountManual(data);
    // navigate("/");
  };

  //  const signUp = async () => {
  //    try {
  //      await addDoc(usersCollectionReference, {
  //        name,
  //        email,
  //        DOB,
  //        username,
  //        password,
  //      });
  //      await createUserWithEmailAndPassword(auth, email, password);
  //      navigate("/");
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  return (
    <div className="manualSignUpStepFive">
      <div className="">
        <FormHeader text="Create your account" />
        {/* CONFIRMATION */}

        <span>name: {name}</span>
        <span>email: {email}</span>
        <span>DOB: {DOB}</span>
        <span>username: @{username}</span>
      </div>

      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non
          aliquam cum nesciunt, ea voluptate laboriosam minus sunt ut repellat
          doloremque, quia reprehenderit assumenda. Explicabo debitis unde
          necessitatibus at accusantium! lore
        </p>

        <Button
          text="Sign up"
          dark={true}
          onClick={() => signUp({ name, email, DOB, username, password })}
        />
      </div>
    </div>
  );
};

export default ManualSignUpStepFive;
