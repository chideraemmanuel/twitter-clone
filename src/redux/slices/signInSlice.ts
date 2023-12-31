import { createSlice } from "@reduxjs/toolkit";

export interface SignInStateTypes {
  providerId: string | null;
  uid: string;
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
        providerName: "google" | "apple";
        step: number;
      };
    };
  };

  loginForm: {
    active: boolean;
    step: number;
    loginInfo: {
      // input: string;
      email: string;
      // username: string;
      password: string;
    };
    // initialPageActive: boolean;
    // type: {
    //   manual: {
    //     active: boolean;
    //     step: number;
    //   };
    //   provider: {
    //     active: boolean;
    //     providerName: "google" | "apple";
    //     step: number;
    //   };
    // };
  };
}

const initialState: SignInStateTypes = {
  providerId: null,
  // **********************
  uid: "",
  // **********************
  currentUser: {
    active: false,
    isLoading: true,
  },
  // **********************
  signUpForm: {
    active: false,
    initialPageActive: false,
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
        providerName: "google",
        step: 0,
      },
    },
  },
  loginForm: {
    active: true,
    step: 1,
    loginInfo: {
      // input: "",
      email: "",
      // username: "",
      password: "",
    },
    // initialPageActive: true,
    // type: {
    //   manual: {
    //     active: false,
    //     step: 0,
    //   },
    //   provider: {
    //     active: false,
    //     providerName: "google",
    //     step: 0,
    //   },
    // },
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
    startProviderSignUp: (
      state: SignInStateTypes,
      action: { payload: { provider: "google" | "apple" } }
    ) => {
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
        // state.signUpForm.type.provider.providerName = null;
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
    setUID: (state: SignInStateTypes, action) => {
      state.uid = action.payload;
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
    // ******************
    toggleActiveForm: (state: SignInStateTypes) => {
      if (state.loginForm.active) {
        state.loginForm.active = false;
        state.signUpForm.active = true;
        state.signUpForm.initialPageActive = true;
      } else if (state.signUpForm.active) {
        state.loginForm.active = true;
        state.signUpForm.active = false;
        state.signUpForm.initialPageActive = false;
      }
    },
    // setLoginInfoInput: (state: SignInStateTypes, action) => {
    //   state.loginForm.loginInfo.input = action.payload;
    // },
    setLoginEmail: (state: SignInStateTypes, action) => {
      state.loginForm.loginInfo.email = action.payload;
    },
    setLoginPassword: (state: SignInStateTypes, action) => {
      state.loginForm.loginInfo.password = action.payload;
    },
    previousLoginStep: (state: SignInStateTypes) => {
      state.loginForm.step -= 1;
    },
    nextLoginStep: (state: SignInStateTypes) => {
      state.loginForm.step += 1;
    },
    // ************************
    resetSignInForm: (state: SignInStateTypes) => {
      state.signUpForm.active = false;
      state.signUpForm.initialPageActive = false;
      state.signUpForm.userInfo.name = "";
      state.signUpForm.userInfo.email = "";
      state.signUpForm.userInfo.DOB = "";
      state.signUpForm.userInfo.username = "";
      state.signUpForm.userInfo.password = "";
      state.signUpForm.type.manual.active = false;
      state.signUpForm.type.manual.step = 0;
      state.signUpForm.type.provider.active = false;
      state.signUpForm.type.provider.step = 0;
      state.signUpForm.type.provider.providerName = "google";

      // ***************

      state.loginForm.active = true;
      state.loginForm.loginInfo.email = "";
      state.loginForm.loginInfo.password = "";
      state.loginForm.step = 1;
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
  setUID,
  setCurrentUser,
  setProviderId,
  toggleActiveForm,
  setLoginEmail,
  setLoginPassword,
  // setLoginInfoInput,
  previousLoginStep,
  nextLoginStep,
  resetSignInForm,
} = signInSlice.actions;

export default signInSlice.reducer;
