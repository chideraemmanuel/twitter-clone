import { addDoc } from "firebase/firestore";
import { tweetsCollectionReference } from "../config/firebase";
import { useMutation } from "react-query";
import { TweetTypes } from "../types/tweetTypes";

const postTweet = async (data: TweetTypes) => {
  await addDoc(tweetsCollectionReference, data);
};

export const usePostTweet = () => {
  const { mutate, isLoading, error } = useMutation(postTweet);

  return { mutate, isLoading, error };
};

// FOR TWEET LAYOUT ON DB
export const getTweetConstants = (
  tweetAuthorUID: string,
  tweetContent: string
) => {
  return {
    // id: string;
    tweetAuthorUID,
    tweetContent: {
      text: tweetContent,
      // images
    },
    tweetStats: {
      likes: {
        amount: 0,
        by: [],
      },
      comments: {
        amount: 0,
        by: [],
      },
    },
  };
};
