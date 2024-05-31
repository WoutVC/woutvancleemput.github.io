import { toast } from "react-toastify";

const defaultProps = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export function showToast(type, text, props?) {
  switch (type) {
    case "error":
      toast.error(text, { ...defaultProps, ...props });
      break;
    case "success":
      toast.success(text, { ...defaultProps, ...props });
      break;
  }
}
