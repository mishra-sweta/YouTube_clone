import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sidebar: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleSidebar, closeSidebar } = appSlice.actions;
