import { addDoc } from "firebase/firestore";
import { auth, usersCollectionReference } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useQuery } from "react-query";

export interface userTypes {
  name: string;
  email: string;
  DOB: string;
  username: string;
  password: string;
}

// export const createAccountManual = async (data: userTypes) => {
//   try {
//     await addDoc(usersCollectionReference, data);
//     await createUserWithEmailAndPassword(auth, data.email, data.password);
//   } catch (error) {
//     console.log(error);
//   }
// };

const createAccountFunction = async ({ queryKey }: { queryKey: any[] }) => {
  const data = queryKey[1];
  const signUpType = queryKey[2];
  // console.log(queryKey);

  await addDoc(usersCollectionReference, data);
  if (signUpType === "manual") {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  }
};

export const createAccount = (
  userInfo: userTypes,
  signUpType: "manual" | "google" | "apple"
) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["create account", userInfo, signUpType],
    createAccountFunction,
    {
      enabled: false,
    }
  );

  return { data, isLoading, error, refetch };
};
