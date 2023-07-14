import { signInWithPopup } from "firebase/auth";
import { appleProvider, auth, googleProvider } from "../config/firebase";

export const signInWithProvider = async (provider: "google" | "apple") => {
  if (provider === "google") {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // THEN CHECK IF USER (EMAIL) FROM RESULT IS IN DATABASE
      // IF IT IS, THEN DISPATCH SET USER / LOG USER INTO THEIR ACCOUNT

      // IF IT ISN'T, THEN 👇🏿
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  if (provider === "apple") {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      // THEN CHECK IF USER (EMAIL) FROM RESULT IS IN DATABASE
      // IF IT IS, THEN DISPATCH SET USER / LOG USER INTO THEIR ACCOUNT

      // IF IT ISN'T, THEN 👇🏿
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
};

// const signIn = async ({ queryKey }: { queryKey: any[] }) => {
//   const provider = queryKey[0];

//   if (provider === "google") {
//     return await signInWithPopup(auth, googleProvider);
//   } else if (provider === "apple") {
//     await signInWithPopup(auth, appleProvider);
//   }
// };

// export const signInWithProvider = (provider: "google" | "apple") => {
//   const { data, isLoading, error, refetch } = useQuery(
//     ["sign in with provider", provider],
//     signIn,
//     {
//       enabled: false,
//     }
//   );

//   return { data, isLoading, error, refetch };
// };
