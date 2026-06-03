import React from "react";
import { TOAST_TYPE } from "../../../constants/toast";
import { ToastItem } from "./ToastItem";

export function ToastContainer({ toasts, onDismiss }) {
  if (!toasts.length) {
    return null;
  }

  return (
    <div
      className="toast-container"
      aria-live="polite"
      aria-relevant="additions"
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          type={toast.type ?? TOAST_TYPE.INFO}
          title={toast.title}
          description={toast.description}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
}
