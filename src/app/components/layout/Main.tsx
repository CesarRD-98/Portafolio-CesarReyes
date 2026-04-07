import { ReactNode } from "react"

type MainProps = {
    children: ReactNode
    className?: string
}

export const Main = ({ children, className = '' }: MainProps) => {
    return (
        <main className={`flex-1 bg-neutral-50 dark:bg-neutral-900/80 ${className}`}>
            {children}
        </main>
    )
}