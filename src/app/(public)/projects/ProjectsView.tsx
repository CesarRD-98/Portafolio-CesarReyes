'use client'

import { Section } from "@/app/components/layout/Section"
import Loading from "@/app/components/shared/Loading"
import ProjectCardComponent from "@/app/modules/user_public/components/ProjectCard"
import { useUserPublicContext } from "@/app/modules/user_public/userPublic.context"

export default function ProjectsView() {
    const { user, loading, error } = useUserPublicContext()

    if (loading || !user) return <Loading />
    if (error) { return <p className="text-center text-red-500">Error al cargar proyectos</p> }

    return (
        <Section id="projects" className="flex flex-col gap-10">

            {/* HEADER */}
            <div className="max-w-2xl mb-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Proyectos Destacados
                </h1>

                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Una selección de proyectos que reflejan mi experiencia en el desarrollo web y móvil.
                </p>
            </div>

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2">
                <ProjectCardComponent />
            </div>

        </Section>
    )
}