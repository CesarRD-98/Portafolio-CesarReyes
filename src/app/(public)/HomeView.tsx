'use client'

import Image from 'next/image'
import { FaArrowUp, FaUser } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import Loading from '../components/shared/Loading'
import { Section } from '../components/layout/Section'
import { useUserPublicContext } from '../modules/user_public/userPublic.context'

export default function HomeView() {
    const router = useRouter()
    const { user, loading, error } = useUserPublicContext()

    if (loading || !user) return <Loading />
    if (error) return <p className="text-center text-red-500">Error al cargar</p>

    return (
        <Section id="home" className="flex items-center min-h-[80vh]">

            <div className="grid gap-12 md:grid-cols-2 items-center">

                {/* LEFT */}
                <div className="flex flex-col gap-6">

                    {/* EYEBROW */}
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                        Portafolio profesional
                    </span>

                    {/* TITLE */}
                    <h1 className="text-3xl md:text-5xl font-medium text-neutral-500 dark:text-neutral-300">
                        Hola, soy{' '}
                        <span className="text-neutral-900 dark:text-white font-semibold leading-tight tracking-tight">
                            {user.author}
                        </span>
                    </h1>

                    {/* SUBTITLE (PROTAGONISTA) */}
                    <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                        Desarrollador Web & Software
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                        {user.shortBio}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-2">

                        {/* PRIMARY */}
                        <button
                            onClick={() => router.push('/projects')}
                            className="
                                inline-flex items-center gap-2
                                px-5 py-2 rounded-md
                                text-white font-semibold
                                bg-blue-600/75 hover:bg-blue-600
                                transition-all duration-200 ease-out
                                shadow-sm hover:shadow-md cursor-pointer">
                            Ver proyectos
                            <FaArrowUp className="rotate-45" />
                        </button>

                        {/* SECONDARY */}
                        <button
                            onClick={() => router.push('/about_me')}
                            className="
                                inline-flex items-center gap-2
                                px-5 py-2 rounded-md
                                border-2 border-neutral-300 dark:border-neutral-700
                                text-neutral-700 dark:text-neutral-300
                                hover:bg-neutral-200 dark:hover:bg-neutral-800
                                cursor-pointer transition-all duration-200 ease-out">
                            Sobre mí
                            <FaUser />
                        </button>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end relative">

                    {/* Glow sutil */}
                    <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full -z-10" />

                    <Image
                        src="https://rekydsbimkpqukrlqkbi.supabase.co/storage/v1/object/public/Images/web-developer.webp"
                        alt="Ilustración de desarrollador web"
                        width={380}
                        height={260}
                        priority
                        className="w-full max-w-sm h-auto"
                    />

                </div>

            </div>
        </Section>
    )
}