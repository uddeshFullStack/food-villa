import React from "react";
import { TOAST_TYPE } from "../../../constants/toast";

const typeStyles = {
  [TOAST_TYPE.SUCCESS]: "toast-item--success",
  [TOAST_TYPE.ERROR]: "toast-item--error",
  [TOAST_TYPE.INFO]: "toast-item--info",
};

export function ToastItem({ type, title, description, onDismiss }) {
  return (
    <div className={`toast-item ${typeStyles[type] ?? typeStyles[TOAST_TYPE.INFO]}`}>
      <div className="toast-item__content">
        <p className="toast-item__title">{title}</p>
        {description ? (
          <p className="toast-item__description">{description}</p>
        ) : null}
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
