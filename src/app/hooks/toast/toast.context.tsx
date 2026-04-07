'use client'

import { ToastContainer } from "@/app/components/ui/toast/ToastContainer";
import { ChildrenProps } from "@/app/types/children.type";
import { Toast } from "@/app/types/toast.type";
import { createContext, useContext, useRef, useState } from "react";

interface ToastCtxType {
    toasts: Toast[];
    showToast: (toast: Omit<Toast, "id" | "closing">) => void;
    closeToast: (id: string) => void;
    pauseToast: (id: string) => void;
    resumeToast: (id: string) => void;
}

const ToastContext = createContext<ToastCtxType | undefined>(undefined);

export const ToastProvider = ({ children }: ChildrenProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const timers = useRef<Map<string, NodeJS.Timeout>>(new Map());

    const startTimer = (id: string, duration: number) => {
        const timer = setTimeout(() => closeToast(id), duration);
        timers.current.set(id, timer);
    };

    const showToast = (toast: Omit<Toast, "id" | "closing">) => {
        const id = crypto.randomUUID();
        const duration: number = toast.duration ?? 5000;

        const newToast: Toast = {
            id,
            closing: false,
            ...toast,
            duration,
        };

        setToasts(prev => [...prev, newToast].slice(-4));
        startTimer(id, duration);
    };

    const pauseToast = (id: string) => {
        const timer = timers.current.get(id);
        if (timer) clearTimeout(timer);
    };

    const resumeToast = (id: string) => {
        const toast = toasts.find(t => t.id === id);
        if (!toast) return;
        startTimer(id, toast.duration ?? 5000);
    };

    const closeToast = (id: string) => {
        pauseToast(id);

        setToasts(prev =>
            prev.map(t => t.id === id ? { ...t, closing: true } : t)
        );

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
            timers.current.delete(id);
        }, 250);
    };

    return (
        <ToastContext.Provider value={{ toasts, showToast, closeToast, pauseToast, resumeToast }}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToastContext must be used within ToastProvider");
    return ctx;
};