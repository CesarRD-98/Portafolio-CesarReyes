import { ReactNode } from "react"

type AsideProps = {
    children: ReactNode
    className?: string
}

export const Aside = ({ children, className = '' }: AsideProps) => {
    return (
        <aside className={`w-full ${className}`}>
            {children}
        </aside>
    )
}