import { toggleDialogPremiumRequired } from "@/store/slices/globleLoader.slice";
import { store } from "@/store/store";
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
  // store.dispatch(toggleDialogPremiumRequired(true));
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  console.log(error);

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
      showCustomToast("Session Expired", "error");
      window.location.href = "/auth";
      // window.location.href = `/auth?message=${encodeURIComponent("Session timeout")}&&path=${JSON.stringify(window.location)}`;
    } else if (
      error.code === "ERR_BAD_REQUEST" &&
      error.response.status === 403
    ) {
      localStorage.clear();
      window.location.href = "/access_denied";
    } else if (error.response?.data?.Message) {
    } else if (
      error.code === "PREMIUM_REQUIRED" &&
      error.response.status === 403
    ) {
      store.dispatch(toggleDialogPremiumRequired(true));
    } else {
      // error.code = "RES_ERROR";
      showCustomToast(`${error.response?.data.message}`, "error");
    }
  } else if (error?.response?.status >= 500) {
    if (error.response?.data?.Message) {
      showCustomToast(
        `${error.response?.data.Message ?? "Internal Server Error"}`,
        "error"
      );
    } else {
      showCustomToast("Internal Server Error", "error");
    }
  }
  return Promise.reject(error);
};

export {
  requestErrorHandler,
  requestHandler,
  responseErrorHandler,
  responseHandler,
};
