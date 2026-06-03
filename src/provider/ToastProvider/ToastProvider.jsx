import React, { useCallback, useMemo, useState } from "react";
import { TOAST_DURATION_MS, TOAST_TYPE } from "../../constants/toast";
import { ToastContainer } from "../../components/common/Toast/ToastContainer";
import { ToastContext } from "./ToastContext";

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (type, title, description) => {
      const id = ++toastId;
      setToasts((current) => [...current, { id, type, title, description }]);

      window.setTimeout(() => {
        removeToast(id);
      }, TOAST_DURATION_MS);
    },
    [removeToast]
  );

  const value = useMemo(
    () => ({
      success: (title, description) =>
        showToast(TOAST_TYPE.SUCCESS, title, description),
      error: (title, description) =>
        showToast(TOAST_TYPE.ERROR, title, description),
      info: (title, description) =>
        showToast(TOAST_TYPE.INFO, title, description),
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}
