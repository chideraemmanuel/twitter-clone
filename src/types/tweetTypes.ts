export interface TweetTypes {
  id?: string;
  createdAt: any;
  tweetAuthorUID: string;
  tweetContent: TweetContentTypes;
  tweetStats: TweetStatsTypes;
}

export interface TweetContentTypes {
  text: string;
}

export interface TweetStatsTypes {
  likes: TweetLikeInfoTypes[] | [];
  comments: TweetCommentInfoTypes[] | [];
}

export interface TweetLikeInfoTypes {
  tweetLikerUID: string;
  // username: string;
  // displayName: string;
}

export interface TweetCommentInfoTypes {
  replyAuthorUID: string;
  // username: string;
  // displayName: string;
  comment: string;
}
