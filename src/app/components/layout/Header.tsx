import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode
    className?: string
}

export const Header = ({ children, className = '' }: HeaderProps) => {
    return (
        <header className={`w-full flex-shrink-0 ${className}`}>
            {children}
        </header>
    )
}