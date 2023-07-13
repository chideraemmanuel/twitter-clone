import { doc, getDoc } from "firebase/firestore";
import { useQuery } from "react-query";
import { db } from "../config/firebase";

const fetchTweet = async ({ queryKey }: { queryKey: any[] }) => {
  const tweetId = queryKey[1];
  // REFERENCE TO TWEET THAT IS BEING LIKED
  const tweetReference = doc(db, "tweets", tweetId);

  // FETCH LIKED TWEET FOR CHECKS
  const response = await getDoc(tweetReference);
  return { ...response.data(), id: response.id };
};

export const useGetTweet = (tweetId: string) => {
  return useQuery(["fetch tweet", tweetId], fetchTweet);
};
