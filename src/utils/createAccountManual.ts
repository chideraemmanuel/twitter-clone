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

const createAccount = async ({ queryKey }: { queryKey: any[] }) => {
  const data = queryKey[0];

  await addDoc(usersCollectionReference, data);
  await createUserWithEmailAndPassword(auth, data.email, data.password);
};

export const createAccountManual = (userInfo: userTypes) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["create account", userInfo],
    createAccount,
    {
      enabled: false,
    }
  );

  return { data, isLoading, error, refetch };
};
