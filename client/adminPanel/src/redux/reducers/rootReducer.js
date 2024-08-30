import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { parametricApi } from "../rtkquery/parametricApi";

export const rootReducer = combineReducers({
  auth: authReducer,
  [parametricApi.reducerPath]: parametricApi.reducer,
});
