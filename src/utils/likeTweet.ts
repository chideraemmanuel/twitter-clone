import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const likeTweet = async (tweetID: string, tweetLikerUID: string) => {
  try {
    // REFERENCE TO TWEET THAT IS BEING REPLIED TO
    const tweetReference = doc(db, "tweets", tweetID);

    await setDoc(
      tweetReference,
      {
        tweetStats: {
          likes: [
            {
              tweetLikerUID,
            },
          ],
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log("this is from me", error);
  }
};
