import { getDocs, query, where } from "firebase/firestore";
import { useQuery } from "react-query";
import { usersCollectionReference } from "../config/firebase";

const fetchUser = async ({ queryKey }: { queryKey: any[] }) => {
  const uid: string = queryKey[1];
  // QUERY TO GET PARTICULAR USER
  const q = query(usersCollectionReference, where("uid", "==", uid));

  const response = await getDocs(q);

  // console.log(response.docs[0]);
  return { ...response.docs[0].data(), id: response.docs[0].id };
};

const useGetUser = (uid: string) => {
  const { data, isLoading, error } = useQuery(["fetch user", uid], fetchUser);

  return { data, isLoading, error };
};

export default useGetUser;
