import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { tweetsCollectionReference } from "../config/firebase";

const fetchTweets = async () => {
  // might not need onsnapshot because of react query's background fetch
  const response = await getDocs(tweetsCollectionReference);
  const dum = response.docs.map((item) => {
    return item.data();
  });
  console.log(dum);
  // return response.docs.map((item) => ({ ...item.data(), id: item.id }));
};

export const getTweets = () => {
  const { data, isLoading, error } = useQuery(["fetch tweets"], fetchTweets);

  return { data, isLoading, error };
};
