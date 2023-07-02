import { addDoc } from "firebase/firestore";
import { auth, usersCollectionReference } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export interface userTypes {
  name: string;
  email: string;
  DOB: string;
  username: string;
  password: string;
}

export const createAccountManual = async (data: userTypes) => {
  try {
    await addDoc(usersCollectionReference, data);
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  } catch (error) {
    console.log(error);
  }
};
