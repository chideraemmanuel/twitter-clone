import { createSlice } from "@reduxjs/toolkit";

export interface TweetStateTypes {
  isCreatingTweet: boolean;
  tweetContent: string;
}

const initialState: TweetStateTypes = {
  isCreatingTweet: false,
  tweetContent: "",
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
  },
});

export const {
  openTweetCreation,
  closeTweetCreation,
  setTweetContent,
  resetTweetContent,
} = tweetSlice.actions;

export default tweetSlice.reducer;
