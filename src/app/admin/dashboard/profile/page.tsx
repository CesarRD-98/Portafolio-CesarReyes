'use client'

import Image from 'next/image'
import { useProfile } from '@/app/modules/dashboard/profile/hooks/useProfile'
import { useToastContext } from '@/app/hooks/toast/toast.context'
import Link from 'next/link'
import { AppError } from '@/app/lib/errors/appError'

export default function ProfilePage() {
    const { showToast } = useToastContext()
    const { data: profile, isError, error } = useProfile()

    if (isError) {
        if (error instanceof AppError) {
            showToast({
                type: error.type,
                title: 'Error',
                message: error.message
            })
        }
    }

    if (!profile) {
        return (
            <p className="text-neutral-500 dark:text-neutral-400">No hay información de perfil</p>
        )
    }

    return (
        <section className="flex flex-col gap-8">

            {/* HEADER */}
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Perfil
                </h1>
                <p className="text-base text-neutral-600 dark:text-neutral-400">
                    Información pública mostrada en tu portafolio
                </p>
            </div>

            {/* MAIN CARD */}
            <div className="p-6 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/60 
            dark:bg-neutral-900/60 backdrop-blur-md flex flex-col gap-6">

                <div className='flex flex-col md:flex-row items-center gap-4'>
                    {/* AVATAR */}
                    <div>
                        <Image
                            src={profile.avatarUrl}
                            alt="Avatar"
                            width={140}
                            height={140}
                            className="rounded-md border border-neutral-200 dark:border-neutral-700 object-cover shrink-0"
                        />
                    </div>

                    <div className='flex flex-col gap-4 md:gap-1'>
                        {/* AUTHOR + YEAR */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                {profile.author}
                            </h2>

                            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium 
                            bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                                Año {profile.year}
                            </span>
                        </div>
                        {/* SHORT BIO */}
                        <p className="text-base text-center md:text-start text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {profile.shortBio}
                        </p>
                    </div>
                </div>

                {/* FULL BIO */}
                <div className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40
                        flex flex-col gap-2">
                    <span className="text-sm font-medium text-neutral-500">
                        Biografía completa
                    </span>

                    <div className="">
                        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {profile.fullBio}
                        </p>
                    </div>
                </div>

                {/* ENFOQUE */}
                <div className="p-5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40
                        flex flex-col gap-2
                    ">
                    <span className="text-sm font-medium text-neutral-500">
                        Enfoque actual
                    </span>

                    <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {profile.learningFocus}
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
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
                        Descargar CV
                    </Link>

                    <span className="text-sm text-neutral-500 whitespace-nowrap">
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