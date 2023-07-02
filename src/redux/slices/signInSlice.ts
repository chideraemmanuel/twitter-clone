import { createSlice } from "@reduxjs/toolkit";

export interface signInStateTypes {
  currentUser: any;
  signUpForm: {
    active: boolean;
    initialPageActive: boolean;
    userInfo: {
      name: string;
      email: string;
      DOB: string;
      username: string;
      password: string;
    };
    type: {
      manual: {
        active: boolean;
        step: number;
        // userInfo: {
        //   name: string
        //   email: string
        //   DOB: string
        //   username: string
        //   password: string
        // }
      };
      google: {
        active: boolean;
        step: number;
        // userInfo: {
        //   name: string
        //   email: string
        //   DOB: string
        //   username: string
        //   password: string
        // }
      };
    };
  };
}

const initialState: signInStateTypes = {
  currentUser: null,
  signUpForm: {
    active: true,
    initialPageActive: true,
    userInfo: {
      name: "",
      email: "",
      DOB: "",
      username: "",
      password: "",
    },
    type: {
      manual: {
        active: false,
        step: 0,
        // userInfo: {
        //   name: "",
        //   email: "",
        //   DOB: "",
        //   username: "",
        //   password: "",
        // },
      },
      google: {
        active: false,
        step: 0,
        // userInfo: {
        //   name: "",
        //   email: "",
        //   DOB: "",
        //   username: "",
        //   password: "",
        // },
      },
    },
  },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    startCreateAccount: (state: signInStateTypes) => {
      state.signUpForm.initialPageActive = false;
      state.signUpForm.type.manual.active = true;
      state.signUpForm.type.manual.step = 1;
    },
    nextManualSignInStep: (state: signInStateTypes) => {
      // state.signUpForm.initialPageActive = false;
      // state.signUpForm.type.manual.active = true;
      state.signUpForm.type.manual.step += 1;
    },
    setName: (state: signInStateTypes, action) => {
      state.signUpForm.userInfo.name = action.payload;
    },
    setEmail: (state: signInStateTypes, action) => {
      state.signUpForm.userInfo.email = action.payload;
    },
    setDOB: (state: signInStateTypes, action) => {
      state.signUpForm.userInfo.DOB = action.payload;
    },
    setUsername: (state: signInStateTypes, action) => {
      state.signUpForm.userInfo.username = action.payload;
    },
    setPassword: (state: signInStateTypes, action) => {
      state.signUpForm.userInfo.password = action.payload;
    },
    setCurrentUser: (state: signInStateTypes, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  startCreateAccount,
  nextManualSignInStep,
  setName,
  setEmail,
  setDOB,
  setUsername,
  setPassword,
  setCurrentUser,
} = signInSlice.actions;

export default signInSlice.reducer;
