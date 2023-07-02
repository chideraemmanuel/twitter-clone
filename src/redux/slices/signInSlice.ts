import { createSlice } from "@reduxjs/toolkit";

export interface signInStateTypes {
  signUpForm: {
    active: boolean;
    initialPageActive: boolean;
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

const initialState: signInStateTypes = {
  signUpForm: {
    active: true,
    initialPageActive: true,
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
  },
});

export const { startCreateAccount, nextManualSignInStep } = signInSlice.actions;

export default signInSlice.reducer;
