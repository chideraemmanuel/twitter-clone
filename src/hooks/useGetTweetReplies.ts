import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { db } from "../config/firebase";

const fetchTweetReplies = async ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1];

  const tweetRepliesCollectionReference = collection(
    db,
    `tweets/${id}/replies`
  );

  const response = await getDocs(tweetRepliesCollectionReference);

  const data = response.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });

  return data;
};

export const useGetTweetReplies = (id: string) => {
  return useQuery(["fetch tweet replies", id], fetchTweetReplies);
};
