'use client'

import Link from 'next/link'
import {
    User,
    FolderKanban,
    Mail,
    Wrench
} from 'lucide-react'

const actions = [
    {
        title: 'Perfil',
        description: 'Ver y actualizar tu información personal',
        href: '/admin/dashboard/profile',
        icon: User,
    },
    {
        title: 'Proyectos',
        description: 'Gestiona tus proyectos',
        href: '/admin/dashboard/projects',
        icon: FolderKanban,
    },
    {
        title: 'Contactos',
        description: 'Administra tus medios de contacto',
        href: '/admin/dashboard/contacts',
        icon: Mail,
    },
    {
        title: 'Habilidades',
        description: 'Edita tus skills y tecnologías',
        href: '/admin/dashboard/skills',
        icon: Wrench,
    },
]

export default function DashboardPage() {
    return (
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Dashboard
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Gestiona tu contenido y configuraciones
                </p>
            </div>

            {/* ACTIONS GRID */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {actions.map((action) => {
                    const Icon = action.icon

                    return (
                        <Link
                            key={action.href}
                            href={action.href}
                            className="
                                group flex flex-col gap-4
                                p-5 rounded-xl
                                border border-neutral-200 dark:border-neutral-800
                                bg-white/60 dark:bg-neutral-900/60
                                backdrop-blur-md
                                transition-all duration-200 ease-out
                                hover:-translate-y-[2px]
                                hover:shadow-md
                            ">

                            {/* ICON */}
                            <div className="
                                    w-10 h-10 flex items-center justify-center
                                    rounded-lg
                                    bg-neutral-100 dark:bg-neutral-800
                                    text-neutral-700 dark:text-neutral-300
                                    group-hover:text-blue-600
                                    transition-colors
                                ">
                                <Icon size={20} />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                                    {action.title}
                                </h3>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                    {action.description}
                                </p>
                            </div>

                        </Link>
                    )
                })}

            </div>

        </section>
    )
}