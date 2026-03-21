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
        const duration = toast.duration ?? 4000;

        const newToast: Toast = {
            id,
            duration,
            closing: false,
            ...toast
        }

        setToasts(prev => {
            let updatedToasts = [...prev, newToast];

            if (updatedToasts.length > 4) {
                const lastToast = updatedToasts[updatedToasts.length - 1];
                closeToast(lastToast.id);
                updatedToasts = updatedToasts.slice(0, 4);
            }
            return updatedToasts;
        });

        setTimeout(() => {
            closeToast(id);
        }, duration);
    };

    const closeToast = (id: string) => {
        setToasts(prev => prev.map(toast => toast.id === id ? { ...toast, closing: true } : toast));
        setTimeout(() => {
            removeToast(id);
        }, 300);
    };


    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, showToast, closeToast }}>
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