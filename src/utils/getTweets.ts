import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { tweetsCollectionReference } from "../config/firebase";

export interface TweetTypes {
  id: string;
  tweetAuthorUID: string;
  tweetContent: {
    text: string;
    // images
  };
  tweetStats: {
    likes: {
      amount: number;
      by: {
        // array of this
        uid: string;
        username: string;
        displayName: string;
      };
    };
    comments: {
      amount: number;
      by: {
        // array of this
        uid: string;
        username: string;
        displayName: string;
        comment: string;
      };
    };
  };
}

const fetchTweets = async () => {
  // might not need onsnapshot because of react query's background fetch
  const response = await getDocs(tweetsCollectionReference);
  const data = response.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  // console.log(data);
  return data;
  // return response.docs.map((item) => ({ ...item.data(), id: item.id }));
};

export const getTweets = () => {
  const { data, isLoading, error } = useQuery(["fetch tweets"], fetchTweets);

  return { data, isLoading, error };
};
