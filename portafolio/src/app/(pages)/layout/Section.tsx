import React from 'react'
import './Section.scss'

export interface SectionProps {
    id: string
    title?: string
    description?: string
    className?: string
    children?: React.ReactNode
}

export function Section({
    id,
    title,
    description,
    className,
    children
}: SectionProps
) {
    return (
        <section id={id} className={`section ${className}`}>
            {title && <h2 className="title">{title}</h2>}
            {description && <p className="description">{description}</p>}
            {children}
        </section>
    )
}
