import { useMutation, useQueryClient } from "react-query";
import { TweetLikeInfoTypes } from "../types/tweetTypes";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

interface Params {
  replyId: string;
  originalTweetId: string;
  replyLikerUID: string;
}

const likeTweetReply = async (payload: Params) => {
  const { replyId, originalTweetId, replyLikerUID } = payload;

  // REFERENCE TO TWEET THAT IS BEING LIKED
  const replyReference = doc(db, `tweets/${originalTweetId}/replies`, replyId);

  // FETCH LIKED TWEET FOR CHECKS
  const response = await getDoc(replyReference);

  // @ts-ignore
  const { tweetStats } = response.data();

  // CHECK IF TWEET HAS BEEN LIKED BY CURRENT USER
  const findLikerUID = tweetStats.likes.find(
    (like: TweetLikeInfoTypes) => like.replyLikerUID === replyLikerUID
  );

  if (findLikerUID) {
    // HAS ALREADY BEEN LIKED
    // FILTER OUT THE CURRENT USER'S LIKE
    try {
      await setDoc(
        replyReference,
        {
          tweetStats: {
            likes: arrayRemove({
              replyLikerUID,
            }),
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    // HAS NOT BEEN LIKED
    try {
      await setDoc(
        replyReference,
        {
          tweetStats: {
            likes: arrayUnion({
              replyLikerUID,
            }),
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export const useLikeTweetReply = () => {
  const queryClient = useQueryClient();

  return useMutation(likeTweetReply, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch tweets");
      queryClient.invalidateQueries("fetch tweet");
      queryClient.invalidateQueries("fetch tweet replies");
    },
  });
};
