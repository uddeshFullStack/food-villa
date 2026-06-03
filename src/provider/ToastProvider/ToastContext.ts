import { createContext } from "react";
import type { ToastType } from "../../constants/toast";

export interface ToastContextValue {
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
}

export interface ToastEntry {
  id: number;
  type: ToastType;
  title: string;
  description?: string;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
