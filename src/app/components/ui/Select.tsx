import { cn } from "@/app/lib/tailwind_merge/cn";
import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
    error?: boolean;
};

export const Select = ({ className, error, ...props }: Props) => {
    return (
        <select
            className={cn(
                "w-full px-3 py-2.5 rounded-md text-sm",
                "bg-white/70 dark:bg-neutral-800/70",
                "text-neutral-900 dark:text-white",
                "border border-neutral-200 dark:border-neutral-700",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500",
                "hover:border-neutral-300 dark:hover:border-neutral-600",
                error && "border-red-500 focus:ring-red-500/20",
                className
            )}
            {...props}
        />
    );
};