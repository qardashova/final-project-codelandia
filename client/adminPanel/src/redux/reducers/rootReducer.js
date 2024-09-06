import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { parametricApi } from "../rtkquery/parametricApi";
import productReducer from "./productReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  [parametricApi.reducerPath]: parametricApi.reducer,
});
