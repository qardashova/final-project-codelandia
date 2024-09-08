import axios from "axios";
import { store } from "../redux/store";
import { logout, setIsAuth } from "../redux/reducers/authReducer";
import { LS_TOKEN_KEY } from "../constants/storageKeys";

const baseApi = axios.create({
  baseURL: "http://localhost:3001",
});

baseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response) => {
    store.dispatch(setIsAuth());
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status == 401) {
      store.dispatch(logout());
      console.log(error.response.data?.message);
    } else {
      console.log(error.response.data?.message);
    }
    return Promise.reject(error);
  }
);

export default baseApi;
