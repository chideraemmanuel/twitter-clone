import { addDoc } from "firebase/firestore";
import { auth, usersCollectionReference } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "react-query";

export interface userTypes {
  name: string;
  email: string;
  DOB: string;
  username: string;
  password: string;
  uid?: string;
}

interface Params {
  data: userTypes;
  signUpType: "manual" | "google" | "apple";
}

const createAccount = async (payload: Params) => {
  const { signUpType, data } = payload;

  if (signUpType === "manual") {
    // for manual, uid will be added after user has been authenticated
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const { uid } = createdUser.user;
    await addDoc(usersCollectionReference, { ...data, uid });
    return;
  }
  // else
  // for provider authentication, uid will be part of data argument
  await addDoc(usersCollectionReference, data);
};

export const useCreateAccount = () => {
  return useMutation(createAccount);
};
