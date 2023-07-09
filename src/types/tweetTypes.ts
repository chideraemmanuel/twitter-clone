export interface TweetTypes {
  id?: string;
  createdAt: any;
  tweetAuthorUID: string;
  tweetContent: TweetContent;
  tweetStats: TweetStats;
}

export interface TweetContent {
  text: string;
}

export interface TweetStats {
  likes: {
    amount: number;
    by: TweetLikeInfo[] | [];
  };

  comments: {
    amount: number;
    by: TweetCommentInfo[] | [];
  };
}

export interface TweetLikeInfo {
  uid: string;
  username: string;
  displayName: string;
}

export interface TweetCommentInfo {
  uid: string;
  username: string;
  displayName: string;
  comment: string;
}
