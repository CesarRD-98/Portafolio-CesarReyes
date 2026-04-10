'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900 px-6 text-center">

            <h1 className="text-6xl font-bold text-neutral-800 dark:text-white">
                404
            </h1>

            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                La página que buscas no existe o fue movida.
            </p>

            <div className="mt-6 flex gap-4">
                <Link
                    href="/"
                    className="px-5 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black font-medium"
                >
                    Ir al inicio
                </Link>

                <button
                    onClick={() => router.back()}
                    className="px-5 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                >
                    Volver atrás
                </button>
            </div>

        </div>
    )
}