import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { parametricApi } from "../rtkquery/parametricApi";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
  [parametricApi.reducerPath]: parametricApi.reducer,
});
