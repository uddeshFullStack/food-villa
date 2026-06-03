import React from "react";
import { TOAST_TYPE } from "../../../constants/toast";
import type { ToastType } from "../../../constants/toast";

const typeStyles: Record<ToastType, string> = {
  [TOAST_TYPE.SUCCESS]: "toast-item--success",
  [TOAST_TYPE.ERROR]: "toast-item--error",
  [TOAST_TYPE.INFO]: "toast-item--info",
};

interface ToastItemProps {
  type: ToastType;
  title: string;
  description?: string;
  onDismiss: () => void;
}

export function ToastItem({ type, title, description, onDismiss }: ToastItemProps) {
  return (
    <div className={`toast-item ${typeStyles[type] ?? typeStyles[TOAST_TYPE.INFO]}`}>
      <div className="toast-item__content">
        <p className="toast-item__title">{title}</p>
        {description ? <p className="toast-item__description">{description}</p> : null}
      </div>
      <button
        type="button"
        className="toast-item__close"
        aria-label="Dismiss notification"
        onClick={onDismiss}
      >
        ×
      </button>
    </div>
  );
}
