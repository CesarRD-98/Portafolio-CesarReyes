'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa6'
import { useUserPublicContext } from '../userPublic.context'
import { Project } from '../userPublic.types'

export default function ProjectCardComponent() {
    const { user } = useUserPublicContext()
    const projects: Project[] = user?.projects ?? []

    if (!projects.length) {
        return <p className="text-neutral-500 dark:text-neutral-400">Aún no hay proyectos para mostrar</p>
    }

    return (
        <>
            {projects.map(project => (
                <div
                    key={project.id}
                    className="
                            group flex flex-col
                            rounded-xl overflow-hidden
                            border border-neutral-200 dark:border-neutral-800
                            bg-white/60 dark:bg-neutral-900/60
                            backdrop-blur-md
                            transition-all duration-300 ease-out
                            hover:-translate-y-[3px]
                            hover:shadow-lg">

                    {/* IMAGE */}
                    <div className="relative w-full h-48 overflow-hidden">
                        <Image
                            src={project.imgUrl}
                            alt={project.title}
                            fill
                            className="
                                    object-cover
                                    transition-transform duration-300
                                    group-hover:scale-105"/>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col gap-4">

                        {/* TITLE */}
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {project.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                            {project.description}
                        </p>

                        {/* STACK */}
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="
                                            text-xs px-2 py-1 rounded-md
                                            bg-neutral-100 dark:bg-neutral-800
                                            text-neutral-600 dark:text-neutral-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* ROLE */}
                        <p className="text-xs text-neutral-500">
                            Rol: {project.role}
                        </p>

                        {/* CTA */}
                        <div className="mt-2">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                        inline-flex items-center gap-2
                                        text-sm font-medium
                                        text-blue-500
                                        hover:underline">
                                Ver proyecto
                                <FaArrowUp className="rotate-45" />
                            </Link>
                        </div>

                    </div>

                </div>
            ))}
        </>
    )
}