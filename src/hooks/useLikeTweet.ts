import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useMutation, useQueryClient } from "react-query";
import { db } from "../config/firebase";
import { TweetLikeInfoTypes } from "../types/tweetTypes";

interface Params {
  tweetId: string;
  tweetLikerUID: string;
}

const likeTweet = async (payload: Params) => {
  const { tweetId, tweetLikerUID } = payload;

  // REFERENCE TO TWEET THAT IS BEING LIKED
  const tweetReference = doc(db, "tweets", tweetId);

  // FETCH LIKED TWEET FOR CHECKS
  const response = await getDoc(tweetReference);

  const { tweetStats } = response.data();

  // CHECK IF TWEET HAS BEEN LIKED BY CURRENT USER
  const findLikerUID = tweetStats.likes.find(
    (like: TweetLikeInfoTypes) => like.tweetLikerUID === tweetLikerUID
  );

  //   console.log(findLikerUID);

  if (findLikerUID) {
    // HAS ALREADY BEEN LIKED
    // FILTER OUT THE CURRENT USER'S LIKE
    // const filteredLikes = tweetStats.likes.filter(
    //   (like: TweetLikeInfoTypes) => like.tweetLikerUID !== tweetLikerUID
    // );

    // console.log(filteredLikes);

    try {
      await setDoc(
        tweetReference,
        {
          tweetStats: {
            likes: arrayRemove({
              tweetLikerUID,
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
      //   const tweetReference = doc(db, "tweets", tweetID);

      await setDoc(
        tweetReference,
        {
          tweetStats: {
            likes: arrayUnion({
              tweetLikerUID,
            }),
          },
        },
        { merge: true }
      );
    } catch (error) {
      console.log("this is from me", error);
    }
  }
};

export const useLikeTweet = () => {
  const queryClient = useQueryClient();

  return useMutation(likeTweet, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch tweets");
      queryClient.invalidateQueries("fetch tweet");
    },
  });
};
