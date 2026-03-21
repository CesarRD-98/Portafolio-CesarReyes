import { useToastContext } from "./toast.provider";
import { Toast } from "./toast.type";
import { XIcon } from "lucide-react";

interface Props {
    toast: Toast;
}

export const ToastItem = ({ toast }: Props) => {
    const { closeToast } = useToastContext();

    return (
        <div className={`toast toast-${toast.type} ${toast.closing ? "toast-exit" : ""}`}>
            <div className="toast-content">
                <strong>{toast.title}</strong>
                <p>{toast.message}</p>
            </div>

            <button className="toast-close" onClick={() => closeToast(toast.id)}>
                <XIcon className="toast-close__icon" />
            </button>
        </div>
    );
};