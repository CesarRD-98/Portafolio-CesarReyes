import { createContext } from "react";
import { Toast } from "./toast.type";

export interface ToastCtxType {
    toasts: Toast[];
    showToast: (toast: Omit<Toast, "id">) => void;
    closeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastCtxType | null>(null);