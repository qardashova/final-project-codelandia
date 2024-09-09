import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";
import { LS_TOKEN_KEY } from "../../constants/consts";

const initialState = {
  isAuth: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("token");
    },
    setIsAuth: (state) => {
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { token } = action.payload;
      state.isAuth = true;
      localStorage.setItem(LS_TOKEN_KEY, token);
    });
  },
});

export const { logout, setIsAuth } = authSlice.actions;

export default authSlice.reducer;
