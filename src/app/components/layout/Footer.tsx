'use client'

import { useUserPublicContext } from "@/app/modules/user_public/userPublic.context"

export const Footer = () => {
    const { user } = useUserPublicContext();
    return (
        <footer className="w-full bg-white/60 backdrop-blur-md dark:bg-neutral-900/60 shadow-[0_-1px_0_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto py-3 md:py-8 text-center">
                {user && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        © {user.author} {user.year} — Portafolio
                    </p>
                )}
            </div>
        </footer>
    )
}