import { createSlice } from "@reduxjs/toolkit";
import { addUser, getAllUsers, getUserInfo } from "../actions/userActions";

const initialState = {
  userInfo: null,
  users: [],
  popups: {
    addUserPopup: false,
  },
  totalCount: 0,
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
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.totalCount = action.payload[0]?.total_count;
    });
    builder.addCase(addUser.fulfilled, (state) => {
      state.popups.addUserPopup = false;
    });
  },
});

export const { handleOpenPopup } = userSlice.actions;

export default userSlice.reducer;
