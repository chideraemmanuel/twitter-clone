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
  uid?: string;
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
  const data: userTypes = queryKey[1];
  const signUpType: "manual" | "google" | "apple" = queryKey[2];
  // console.log(queryKey);

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
