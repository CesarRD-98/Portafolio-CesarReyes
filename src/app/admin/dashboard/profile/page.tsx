'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useProfile } from '@/app/modules/profile/hooks/useProfile'
import Loading from '@/app/components/shared/Loading'
import { useToastContext } from '@/app/hooks/toast/toast.context'
import Link from 'next/link'

export default function ProfilePage() {
    const { showToast } = useToastContext()
    const { data: profile, isLoading, isError, error } = useProfile()


    useEffect(() => {
        if (isError) {
            showToast({
                title: 'Error al cargar perfil',
                message:
                    error instanceof Error ? error.message : 'Error desconocido',
                type: 'error',
            })
        }
    }, [isError, error, showToast])

    if (isLoading) return <Loading />

    if (!profile) {
        return (
            <p className="text-neutral-500 dark:text-neutral-400">
                No hay información de perfil
            </p>
        )
    }

    return (
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="max-w-2xl space-y-1">
                    <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                        Perfil
                    </h1>
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                        Información pública mostrada en tu portafolio
                    </p>
                </div>
            </div>

            {/* MAIN CARD */}
            <div className="
                    p-6 rounded-xl
                    border border-neutral-200 dark:border-neutral-800
                    bg-white/60 dark:bg-neutral-900/60
                    backdrop-blur-md
                    flex flex-col gap-8
                ">

                {/* TOP SECTION */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">

                    <Image
                        src={profile.avatarUrl || '/default-avatar.png'}
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="
                            rounded-xl
                            border border-neutral-200 dark:border-neutral-700
                            object-cover
                            "
                    />

                    <div className="flex flex-col gap-3">

                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                            {profile.author}
                        </h2>

                        <span className="
                            inline-flex items-center
                            px-3 py-1.5 rounded-md text-sm font-medium
                            bg-neutral-100 dark:bg-neutral-800
                            text-neutral-600 dark:text-neutral-300
                            w-fit
                            ">
                            Año {profile.year}
                        </span>

                        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
                            {profile.shortBio}
                        </p>

                    </div>

                </div>

                {/* GRID CONTENT */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* ENFOQUE */}
                    <div className="
                            p-5 rounded-lg
                            border border-neutral-200 dark:border-neutral-800
                            bg-white/40 dark:bg-neutral-900/40
                            flex flex-col gap-3
                        ">
                        <span className="text-sm font-medium text-neutral-500">
                            Enfoque actual
                        </span>

                        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {profile.learningFocus}
                        </p>
                    </div>

                </div>

                {/* FULL BIO */}
                <div className="flex flex-col gap-3">

                    <span className="text-sm font-medium text-neutral-500">
                        Biografía completa
                    </span>

                    <p className="
                            text-base text-neutral-600 dark:text-neutral-400
                            leading-relaxed max-w-3xl
                        ">
                        {profile.fullBio}
                    </p>

                </div>

                {/* FOOTER */}
                <div className="
                        flex items-center justify-between flex-wrap gap-3
                        pt-4 border-t border-neutral-200 dark:border-neutral-800
                        ">

                    <Link
                        href={profile.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            text-sm font-medium
                            text-blue-600 hover:underline
                            "
                    >
                        Descargar CV
                    </Link>

                    <span className="text-sm text-neutral-500">
                        {profile.updatedAt
                            ? new Date(profile.updatedAt).toLocaleString('es-HN', {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                            })
                            : '-'}
                    </span>

                </div>

            </div>

        </section>
    )
}