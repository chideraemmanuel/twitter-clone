import { createSlice } from "@reduxjs/toolkit";

export interface SignInStateTypes {
  providerId: string | null;
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
      provider: {
        active: boolean;
        providerName: "google" | "apple" | null;
        step: number;
      };
    };
  };
}

const initialState: SignInStateTypes = {
  providerId: null,
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
      provider: {
        active: false,
        providerName: null,
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
        state.signUpForm.type.manual.step = 0;
        return;
      }

      if (state.signUpForm.type.manual.step === 0) {
        return;
      }

      state.signUpForm.type.manual.step -= 1;
    },
    startProviderSignUp: (state: SignInStateTypes, action) => {
      state.signUpForm.initialPageActive = false;
      state.signUpForm.type.provider.providerName = action.payload.provider;

      // if (state.signUpForm.type.provider.providerName === "google") {
      //   state.signUpForm.type.provider.active = true;
      //   state.signUpForm.type.provider.step = 1;
      //   return;
      // }

      state.signUpForm.type.provider.active = true;
      state.signUpForm.type.provider.step = 1;
    },
    nextProviderSignInStep: (state: SignInStateTypes) => {
      // if (state.signUpForm.type.provider.providerName === "google") {
      //   state.signUpForm.type.provider.step += 1;
      //   return;
      // }

      state.signUpForm.type.provider.step += 1;
    },
    previousProviderSignInStep: (state: SignInStateTypes) => {
      if (
        // state.signUpForm.type.provider.providerName === "google" &&
        state.signUpForm.type.provider.step === 1
      ) {
        state.signUpForm.initialPageActive = true;
        state.signUpForm.type.provider.active = false;
        state.signUpForm.type.provider.providerName = null;
        state.signUpForm.type.provider.step = 0;
      } else if (
        // state.signUpForm.type.provider.providerName === "google" &&
        state.signUpForm.type.provider.step === 0
      ) {
        return;
      }

      state.signUpForm.type.provider.step -= 1;
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
    setCurrentUser: (state: SignInStateTypes, action: { payload: boolean }) => {
      // state.currentUser = action.payload;
      state.currentUser.active = action.payload;
      state.currentUser.isLoading = false;
    },
    setProviderId: (
      state: SignInStateTypes,
      action: { payload: "google.com" | "apple.com" }
    ) => {
      state.providerId = action.payload;
    },
  },
});

export const {
  startCreateAccount,
  nextManualSignInStep,
  previousManualSignInStep,
  startProviderSignUp,
  nextProviderSignInStep,
  previousProviderSignInStep,
  setName,
  setEmail,
  setDOB,
  setUsername,
  setPassword,
  setCurrentUser,
  setProviderId,
} = signInSlice.actions;

export default signInSlice.reducer;
