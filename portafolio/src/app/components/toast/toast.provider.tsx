"use client";

import { ChildrenModel } from "@/app/model/children.model";
import { ToastContext } from "./toast.context";
import { useContext, useState } from "react";
import { Toast } from "./toast.type";
import { ToastContainer } from "./ToastContainer";

export const ToastProvider = ({ children }: ChildrenModel) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (toast: Omit<Toast, "id">) => {
        const id = crypto.randomUUID();

        const newToast: Toast = {
            id,
            duration: 3000,
            ...toast
        }

        setToasts(prev => [newToast, ...prev].slice(0, 4));
    };

    const removeToast = (id: string) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
}

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToastContext must be used within a ToastProvider");
    }
    return context;
}