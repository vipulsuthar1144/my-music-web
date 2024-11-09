import { toast, ToastOptions } from "react-toastify";

export type ToastTypes = "success" | "warning" | "error" | "info";

export const showCustomToast = (message: string, toastType: ToastTypes) => {
  const toastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 1500,
    toastId: message,
    isLoading: false,
    // hideProgressBar: true,
    closeButton: false,
    // draggable: true,
    // progress: undefined,
    pauseOnHover: true,
    closeOnClick: true,
  };
  // toast.dismiss();
  toast[toastType](message, toastOptions);
};
