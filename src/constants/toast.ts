export const TOAST_POSITION = "bottom-left" as const;
export const TOAST_DURATION_MS = 3000;

export const TOAST_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
} as const;

export type ToastType = (typeof TOAST_TYPE)[keyof typeof TOAST_TYPE];
