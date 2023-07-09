import { createSlice } from "@reduxjs/toolkit";

export interface TweetStateTypes {
  isCreatingTweet: boolean;
  tweetContent: string;
  isReplyingTweet: boolean;
  replyTweetContent: string;
}

const initialState: TweetStateTypes = {
  isCreatingTweet: false,
  tweetContent: "",
  isReplyingTweet: false,
  replyTweetContent: "",
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    openTweetCreation: (state: TweetStateTypes) => {
      state.isCreatingTweet = true;
    },
    closeTweetCreation: (state: TweetStateTypes) => {
      state.isCreatingTweet = false;
    },
    setTweetContent: (state: TweetStateTypes, action) => {
      state.tweetContent = action.payload;
    },
    resetTweetContent: (state: TweetStateTypes) => {
      state.tweetContent = "";
    },
    openReplyTweet: (state: TweetStateTypes) => {
      state.isReplyingTweet = true;
    },
    closeReplyTweet: (state: TweetStateTypes) => {
      state.isReplyingTweet = false;
    },
    setReplyTweetContent: (state: TweetStateTypes, action) => {
      state.replyTweetContent = action.payload;
    },
    resetReplyTweetContent: (state: TweetStateTypes) => {
      state.replyTweetContent = "";
    },
  },
});

export const {
  openTweetCreation,
  closeTweetCreation,
  setTweetContent,
  resetTweetContent,
  openReplyTweet,
  closeReplyTweet,
  setReplyTweetContent,
  resetReplyTweetContent,
} = tweetSlice.actions;

export default tweetSlice.reducer;
