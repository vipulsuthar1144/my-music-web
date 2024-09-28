import { LocalStorageKeys } from "@utils/constants";
import axios from "axios";
import { toast } from "react-toastify";

export const getAccessToken = (): string => {
  const accessToken = localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  return accessToken ? JSON.parse(accessToken) : "";
};

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer ${getAccessToken()}`;
  // request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  if (axios.isCancel(error)) {
    console.log("responseErrorHandler error " + error);
    return Promise.reject(error);
  }
  toast.error(error.message);
  return Promise.reject(error);
};

export { requestErrorHandler, requestHandler, responseErrorHandler, responseHandler };
