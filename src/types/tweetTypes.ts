import { FieldValue, Timestamp } from "firebase/firestore";

export interface TweetTypes {
  id?: string;
  createdAt: Timestamp | FieldValue | null;
  tweetAuthorUID: string;
  tweetContent: TweetContentTypes;
  tweetStats: TweetStatsTypes;
}

export interface TweetContentTypes {
  text: string;
}

export interface TweetStatsTypes {
  likes: TweetLikeInfoTypes[] | [];
  // comments: TweetCommentInfoTypes[] | [];
  comments: number;
}

export interface TweetLikeInfoTypes {
  tweetLikerUID?: string;
  replyLikerUID?: string;
  // username: string;
  // displayName: string;
}

export interface TweetCommentInfoTypes {
  replyAuthorUID: string;
  // username: string;
  // displayName: string;
  comment: string;
}
