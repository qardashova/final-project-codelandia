import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/userActions";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
