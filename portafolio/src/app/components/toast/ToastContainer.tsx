import { Toast } from "../../types/toast.type";
import { ToastItem } from "./ToastItem";
import "./toast.scss";

interface Props {
    toasts: Toast[];
}

export const ToastContainer = ({ toasts }: Props) => {
    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <ToastItem key={toast.id} toast={toast} />
            ))}
        </div>
    );
}