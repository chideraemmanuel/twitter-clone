import { addDoc, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "react-query";
import { db } from "../config/firebase";
import { TweetCommentInfoTypes } from "../types/tweetTypes";
import useGetUser from "./useGetUser";

// let replyTweet: () => number

interface ReplyInfoTypes {
  tweetId: string;
  //   reply: {
  //     uid: string
  //     comment: string
  //   };
  reply: TweetCommentInfoTypes;
}

const replyTweet = async (replyInfo: ReplyInfoTypes) => {
  const { replyAuthorUID, comment } = replyInfo.reply;
  const { tweetId } = replyInfo;

  // REFERENCE TO TWEET THAT IS BEING REPLIED TO
  const tweetReference = doc(db, "tweets", tweetId);

  // GET USER INFO OF REPLY AUTHOR
  //   const {data} = useGetUser(replyAuthorUID)

  await setDoc(
    tweetReference,
    {
      tweetStats: {
        comments: arrayUnion({
          replyAuthorUID,
          comment,
        }),
      },
    },
    { merge: true }
  );
};

export const useReplyTweet = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(replyTweet, {
    onSuccess: () => queryClient.invalidateQueries("fetch tweets"),
  });

  return { mutate, isLoading, isError };
};
