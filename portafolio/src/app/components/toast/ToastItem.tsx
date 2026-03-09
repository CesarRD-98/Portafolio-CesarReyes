import { useEffect, useState, useRef, useCallback } from "react";
import { useToastContext } from "./toast.provider";
import { Toast } from "./toast.type";
import { XIcon } from "lucide-react";

interface Props {
    toast: Toast;
}

export const ToastItem = ({ toast }: Props) => {
    const { removeToast } = useToastContext();

    const [closing, setClosing] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleClose = useCallback(() => {
        setClosing(true);

        setTimeout(() => {
            removeToast(toast.id);
        }, 300);
    }, [removeToast, toast.id]);

    useEffect(() => {
        const duration = toast.duration ?? 3000;

        timerRef.current = setTimeout(() => {
            handleClose();
        }, duration);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [handleClose, toast.duration]);

    return (
        <div className={`toast toast-${toast.type} ${closing ? "toast-exit" : ""}`}>
            <div className="toast-content">
                <strong>{toast.title}</strong>
                <p>{toast.message}</p>
            </div>

            <button className="toast-close" onClick={handleClose}>
                <XIcon className="toast-close__icon"/>
            </button>
        </div>
    );
};