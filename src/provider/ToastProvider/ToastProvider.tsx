import React, { useCallback, useMemo, useState } from "react";
import { TOAST_DURATION_MS, TOAST_TYPE } from "../../constants/toast";
import { ToastContainer } from "../../components/common/Toast/ToastContainer";
import { ToastContext } from "./ToastContext";
import type { ToastEntry } from "./ToastContext";
import type { ToastType } from "../../constants/toast";

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (type: ToastType, title: string, description?: string) => {
      const id = ++toastId;
      setToasts((current) => [...current, { id, type, title, description }]);
      window.setTimeout(() => removeToast(id), TOAST_DURATION_MS);
    },
    [removeToast]
  );

  const value = useMemo(
    () => ({
      success: (title: string, description?: string) =>
        showToast(TOAST_TYPE.SUCCESS, title, description),
      error: (title: string, description?: string) =>
        showToast(TOAST_TYPE.ERROR, title, description),
      info: (title: string, description?: string) =>
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
