import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { parametricApi } from "../rtkquery/parametricApi";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
  blog: blogReducer,
  [parametricApi.reducerPath]: parametricApi.reducer,
});
