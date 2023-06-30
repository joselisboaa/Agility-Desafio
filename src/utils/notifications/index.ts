import { ToastOptions, toast } from "react-toastify";

const notificationOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function notifySucess(message: string) {
  toast.success(message, notificationOptions);
}

export function notifyError(message: string) {
  toast.error(message, notificationOptions);
}
