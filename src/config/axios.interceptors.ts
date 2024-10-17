import { LocalStorageKeys } from "@utils/constants";
import { showCustomToast } from "@utils/customToast";
import axios from "axios";

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

  if (error.code === "ECONNABORTED") {
    showCustomToast(`${error.message}`, "error");
  } else if (error.code === "ERR_NETWORK") {
    showCustomToast(`Internet Connection Problem`, "error");
  } else if (error?.response?.status >= 400 && error?.response?.status <= 499) {
    if (error.response.status === 401) {
      localStorage.clear();
      showCustomToast("Session Expired", "info");
      window.location.href = `/auth?message=${encodeURIComponent("Session timeout")}&&path=${JSON.stringify(window.location)}`;
    } else if (error.response?.data?.Message) {
      error.code = "RES_ERROR";
    }
  } else if (error?.response?.status >= 500) {
    if (error.response?.data?.Message) {
      showCustomToast(`${error.response?.data.Message ?? "Internal Server Error"}`, "error");
    } else {
      showCustomToast("Internal Server Error", "error");
    }
  }
  return Promise.reject(error);
};

export { requestErrorHandler, requestHandler, responseErrorHandler, responseHandler };
