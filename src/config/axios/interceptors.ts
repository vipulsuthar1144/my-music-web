// export const getLocalAuth = (): ILoginResponse | null => {
//   const storedAuth = localStorage.getItem(LOCALSTORAGE_VARIABLE);
//   const authLocal: ILoginResponse =
//     storedAuth !== null ? JSON.parse(storedAuth) : null;
//   return authLocal;
// };

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer $`;
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};

const requestErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const responseHandler = (response: any) => {
  return Promise.resolve(response);
};

const responseErrorHandler = (error: any) => {
  return Promise.reject(error);
  // if (error.code === "ECONNABORTED") {
  //   toast.error(error.message);
  // } else if (error.code === "ERR_NETWORK") {
  //   toast.error("Internet connection problem.");
  // } else if (error?.response?.status >= 400 && error?.response?.status <= 499) {
  //   if (error.response.status === 401) {
  //     localStorage.clear();
  //     window.location.href = `/auth/login?message=${encodeURIComponent(
  //       "Session timeout"
  //     )}&&path=${JSON.stringify(window.location)}`;
  //   } else if (error.response?.data?.Message) {
  //     error.code = "RES_ERROR";
  //   }
  // } else if (error?.response?.status >= 500) {
  //   if (error.response?.data?.Message) {
  //     toast.error(error.response?.data.Message ?? "Internal Server Error", {
  //       toastId: "500",
  //     });
  //   } else {
  //     toast.error("Internal Server Error");
  //   }
  // }
};

export { requestHandler, requestErrorHandler, responseHandler, responseErrorHandler };
