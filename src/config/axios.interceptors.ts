import { setTopLoadingProgress } from "@/store/slices/globleLoader.slice";
import { store } from "@/store/store";
import { LocalStorageKeys } from "@utils/constants";
import axios from "axios";
import { toast } from "react-toastify";

export const getAccessToken = (): string => {
  const accessToken = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  return accessToken ? JSON.parse(accessToken) : "";
};

const requestHandler = (request: any) => {
  // store.dispatch(setTopLoadingProgress(30));
  request.headers.Authorization = `Bearer ${getAccessToken()}`;
  // request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  // store.dispatch(setTopLoadingProgress(100));
  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  // store.dispatch(setTopLoadingProgress(100));
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  if (axios.isCancel(error)) {
    console.log("responseErrorHandler error " + error);
    return Promise.reject(error);
  }
  // store.dispatch(setTopLoadingProgress(100));
  toast.error(error.message);
  return Promise.reject(error);
};

export { requestErrorHandler, requestHandler, responseErrorHandler, responseHandler };
