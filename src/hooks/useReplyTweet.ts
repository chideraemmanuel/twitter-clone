import { addDoc, collection, doc, increment, setDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "react-query";
import { db } from "../config/firebase";
import { TweetTypes } from "../types/tweetTypes";

// let replyTweet: () => number

interface ReplyInfoTypes {
  data: TweetTypes;
  tweetId: string;
}

const replyTweet = async (replyInfo: ReplyInfoTypes) => {
  // const { replyAuthorUID, comment } = replyInfo.reply;
  const { tweetId } = replyInfo;
  const { data } = replyInfo;

  // REFERENCE TO TWEET THAT IS BEING REPLIED TO
  const tweetReference = doc(db, "tweets", tweetId);

  //CREATE COLLECTION FOR TWEET REPLIES
  const tweetRepliesCollectionReference = collection(
    db,
    `/tweets/${tweetId}/replies`
  );

  // INCREMENT TWEET REPLIES IN TWEET COLLECTION
  await setDoc(
    tweetReference,
    {
      tweetStats: {
        // comments: arrayUnion(),
        comments: increment(1),
      },
    },
    { merge: true }
  );

  // ADD REPLY DATA TO TWEET REPLIES COLLECTION
  await addDoc(tweetRepliesCollectionReference, data);
};

export const useReplyTweet = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(replyTweet, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch tweets");
      queryClient.invalidateQueries("fetch tweet");
      queryClient.invalidateQueries("fetch tweet replies");
    },
  });

  return { mutate, isLoading, isError };
};
