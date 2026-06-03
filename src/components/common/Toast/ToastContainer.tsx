import React from "react";
import type { ToastEntry } from "../../../provider/ToastProvider/ToastContext";
import { ToastItem } from "./ToastItem";

interface ToastContainerProps {
  toasts: ToastEntry[];
  onDismiss: (id: number) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (!toasts.length) return null;

  return (
    <div className="toast-container" aria-live="polite" aria-relevant="additions">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          type={toast.type}
          title={toast.title}
          description={toast.description}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
}
