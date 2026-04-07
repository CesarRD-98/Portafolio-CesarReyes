'use client'

import { Section } from "@/app/components/layout/Section"
import Loading from "@/app/components/shared/Loading"
import ContactCard from "@/app/modules/user_public/components/ContactCard"
import { useUserContext } from "@/app/modules/user_public/user.context"

export default function ContactView() {
    const { user, loading, error } = useUserContext()

    if (loading || !user) return <Loading />
    if (error)
        return (
            <p className="text-center text-red-500">
                Error al cargar información de contacto
            </p>
        )

    return (
        <Section
            id="contact"
            className="flex flex-col gap-10"
        >

            {/* HEADER */}
            <div className="max-w-2xl mb-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Contáctame
                </h1>

                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Si quieres ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios.
                </p>
            </div>

            {/* CONTACT GRID */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ContactCard />
            </div>

        </Section>
    )
}