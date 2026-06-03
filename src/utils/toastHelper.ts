import { useContext } from "react";
import { ToastContext } from "../provider/ToastProvider/ToastContext";
import type { ToastContextValue } from "../provider/ToastProvider/ToastContext";

export function useToast(): ToastContextValue {
  const toast = useContext(ToastContext);

  if (!toast) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return toast;
}
