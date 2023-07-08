import { createSlice } from "@reduxjs/toolkit";

export interface TweetStateTypes {
  isCreatingTweet: boolean;
}

const initialState: TweetStateTypes = {
  isCreatingTweet: true,
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
  },
});

export const { openTweetCreation, closeTweetCreation } = tweetSlice.actions;

export default tweetSlice.reducer;
