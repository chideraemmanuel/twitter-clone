import { createSlice } from "@reduxjs/toolkit";

interface RepliedTweetTypes {
  id: string;
  author: {
    username: string;
    displayName: string;
  };
  content: string;
}

export interface TweetStateTypes {
  isCreatingTweet: boolean;
  tweetContent: string;
  replyInputFocused: boolean;
  isReplyingTweet: boolean;
  tweetReplyContent: string;
  repliedTweet: RepliedTweetTypes;
}

const initialState: TweetStateTypes = {
  isCreatingTweet: false,
  tweetContent: "",
  replyInputFocused: false,
  isReplyingTweet: false,
  tweetReplyContent: "",
  repliedTweet: {
    id: "",
    author: {
      username: "",
      displayName: "",
    },
    content: "",
  },
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
      state.tweetContent = "";
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
      state.tweetReplyContent = "";
    },
    setTweetReplyContent: (state: TweetStateTypes, action) => {
      state.tweetReplyContent = action.payload;
    },
    resetTweetReplyContent: (state: TweetStateTypes) => {
      state.tweetReplyContent = "";
    },
    setRepliedTweetContent: (
      state: TweetStateTypes,
      action: { payload: RepliedTweetTypes }
    ) => {
      state.repliedTweet.author = action.payload.author;
      state.repliedTweet.id = action.payload.id;
      state.repliedTweet.content = action.payload.content;
    },
    focusReplyInput: (state: TweetStateTypes) => {
      state.replyInputFocused = true;
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
  setTweetReplyContent,
  resetTweetReplyContent,
  setRepliedTweetContent,
  focusReplyInput,
} = tweetSlice.actions;

export default tweetSlice.reducer;
