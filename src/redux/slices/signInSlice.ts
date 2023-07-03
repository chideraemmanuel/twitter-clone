import { createSlice } from "@reduxjs/toolkit";

export interface SignInStateTypes {
  currentUser: {
    active: boolean;
    isLoading: boolean;
  };
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
      };
      google: {
        active: boolean;
        step: number;
      };
    };
  };
}

const initialState: SignInStateTypes = {
  currentUser: {
    active: false,
    isLoading: true,
  },
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
      },
      google: {
        active: false,
        step: 0,
      },
    },
  },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    startCreateAccount: (state: SignInStateTypes) => {
      state.signUpForm.initialPageActive = false;
      state.signUpForm.type.manual.active = true;
      state.signUpForm.type.manual.step = 1;
    },
    nextManualSignInStep: (state: SignInStateTypes) => {
      // state.signUpForm.initialPageActive = false;
      // state.signUpForm.type.manual.active = true;
      state.signUpForm.type.manual.step += 1;
    },
    previousManualSignInStep: (state: SignInStateTypes) => {
      // state.signUpForm.initialPageActive = false;
      // state.signUpForm.type.manual.active = true;
      if (state.signUpForm.type.manual.step === 1) {
        state.signUpForm.initialPageActive = true;
        state.signUpForm.type.manual.active = false;
        return;
      }

      if (state.signUpForm.type.manual.step === 0) {
        return;
      }

      state.signUpForm.type.manual.step -= 1;
    },
    setName: (state: SignInStateTypes, action) => {
      state.signUpForm.userInfo.name = action.payload;
    },
    setEmail: (state: SignInStateTypes, action) => {
      state.signUpForm.userInfo.email = action.payload;
    },
    setDOB: (state: SignInStateTypes, action) => {
      state.signUpForm.userInfo.DOB = action.payload;
    },
    setUsername: (state: SignInStateTypes, action) => {
      state.signUpForm.userInfo.username = action.payload;
    },
    setPassword: (state: SignInStateTypes, action) => {
      state.signUpForm.userInfo.password = action.payload;
    },
    setCurrentUser: (state: SignInStateTypes) => {
      // state.currentUser = action.payload;
      state.currentUser.active = true;
      state.currentUser.isLoading = false;
    },
  },
});

export const {
  startCreateAccount,
  nextManualSignInStep,
  previousManualSignInStep,
  setName,
  setEmail,
  setDOB,
  setUsername,
  setPassword,
  setCurrentUser,
} = signInSlice.actions;

export default signInSlice.reducer;
