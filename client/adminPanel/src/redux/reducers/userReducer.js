import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/userActions";

const initialState = {
  userInfo: null,
  users: [],
  popups: {
    addUserPopup: false,
  },
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpenPopup(state, action) {
      state.popups[action.payload] = !state.popups[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { handleOpenPopup } = userSlice.actions;

export default userSlice.reducer;
