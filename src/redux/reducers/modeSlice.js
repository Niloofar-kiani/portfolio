import {createSlice} from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
    toggleActive: true,
  },
  reducers: {
    toggleThemeMode: (state) => {
      state.toggleActive = !state.toggleActive;
      state.mode = state.toggleActive ? "light" : "dark";
    },
  },
});

export const {toggleThemeMode} = modeSlice.actions;

export default modeSlice.reducer;
