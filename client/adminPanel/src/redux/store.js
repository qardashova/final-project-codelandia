import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { parametricApi } from "./rtkquery/parametricApi";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(parametricApi.middleware),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;