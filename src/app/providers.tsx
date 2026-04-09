import { ChildrenProps } from "./types/children.type";
import { ToastProvider } from "./hooks/toast/toast.context";
import { ReactQueryProvider } from "./providers/reactQuery.provider";


export function Providers({ children }: ChildrenProps) {
    return (
        <ToastProvider>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        </ToastProvider>
    );
}