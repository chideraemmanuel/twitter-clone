import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { tweetsCollectionReference } from "../config/firebase";

const fetchTweets = async () => {
  // might not need onsnapshot because of react query's background fetch
  try {
    const response = await getDocs(tweetsCollectionReference);
    const data = response.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    return data;
  } catch (error) {
    console.log("nawa oo", error);
    throw new Error("Could not fetch tweets");
  }
};

export const useGetTweets = () => {
  const { data, isLoading, error, isError } = useQuery(
    ["fetch tweets"],
    fetchTweets
  );

  return { data, isLoading, error, isError };
};
