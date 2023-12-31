import { addDoc, serverTimestamp } from "firebase/firestore";
import { tweetsCollectionReference } from "../config/firebase";
import { useMutation, useQueryClient } from "react-query";
import { TweetTypes } from "../types/tweetTypes";

const postTweet = async (data: TweetTypes) => {
  await addDoc(tweetsCollectionReference, data);
};

export const usePostTweet = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(postTweet, {
    onSuccess: () => queryClient.invalidateQueries("fetch tweets"),
  });

  return { mutate, isLoading, error };
};

// FOR TWEET LAYOUT ON DB
export const getTweetConstants = (
  tweetAuthorUID: string,
  tweetContent: string
) => {
  return {
    // id: string;
    createdAt: serverTimestamp(),
    tweetAuthorUID,
    tweetContent: {
      text: tweetContent,
      // images
    },
    tweetStats: {
      likes: [],
      comments: 0,
    },
  };
};
