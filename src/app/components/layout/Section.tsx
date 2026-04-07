import { ReactNode } from "react"
import { Container } from "./Container"

type SectionProps = {
    children: ReactNode
    title?: string
    id?: string
    description?: string
    className?: string
}

export const Section = ({
    children,
    title,
    id,
    description,
    className = ''
}: SectionProps) => {
    return (
        <section id={id} className={`py-12 md:py-16 ${className}`}>

            <Container>

                {(title || description) && (
                    <div className="mb-8 md:mb-10 max-w-2xl">

                        {title && (
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                                {description}
                            </p>
                        )}

                    </div>
                )}

                {children}

            </Container>

        </section>
    )
}