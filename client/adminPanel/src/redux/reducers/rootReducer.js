import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { parametricApi } from "../rtkquery/parametricApi";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";
import faqReducer from "./faqReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
  blog: blogReducer,
  faq: faqReducer,
  [parametricApi.reducerPath]: parametricApi.reducer,
});
