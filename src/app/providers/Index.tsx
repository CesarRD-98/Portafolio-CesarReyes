import { ToastProvider } from "../hooks/toast/toast.context";
import { ChildrenProps } from "../types/children.type";
import { ReactQueryProvider } from "./ReactQuery.provider";

export function Providers({ children }: ChildrenProps) {
    return (
        <ToastProvider>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        </ToastProvider>
    );
}