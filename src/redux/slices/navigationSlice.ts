import { createSlice } from "@reduxjs/toolkit";

export interface NavigationStateTypes {
  mobileMenuOpen: boolean;
}

const initialState: NavigationStateTypes = {
  mobileMenuOpen: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    openMobileMenu: (state: NavigationStateTypes) => {
      state.mobileMenuOpen = true;
    },
    closeMobileMenu: (state: NavigationStateTypes) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = navigationSlice.actions;

export default navigationSlice.reducer;
