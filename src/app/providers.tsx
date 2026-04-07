import { ChildrenProps } from "./types/children.type";
import { ToastProvider } from "./hooks/toast/toast.context";


export function Providers({ children }: ChildrenProps) {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    );
}