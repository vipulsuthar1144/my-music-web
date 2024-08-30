import { ToastTypes } from "./globleTypes";
import { toast, ToastOptions } from "react-toastify";

export const showCustomToast = (message: string, toastType: ToastTypes) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 1000,
    toastId: message,
    isLoading: false,
    hideProgressBar: true,
    closeButton: false,
    draggable: true,
    progress: undefined,
    pauseOnHover: true,
    closeOnClick: true,
  };
  // toast.dismiss();
  toast[toastType](message, toastOptions);
};
