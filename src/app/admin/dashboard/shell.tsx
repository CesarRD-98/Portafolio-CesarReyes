'use client'

import { useRouter } from 'next/navigation'
import { ChildrenProps } from '@/app/types/children.type'
import { useAuthContext } from '@/app/modules/auth/auth.context'
import { LogOut } from 'lucide-react'
import AvatarAdmin from '@/app/components/ui/avatar_admin/AvatarAdmin'
import Sidebar from '@/app/components/ui/sidebar_accordion/SidebarAccordion'

export default function DashboardShell({ children }: ChildrenProps) {
    const { logout } = useAuthContext()
    const router = useRouter()

    const handlerLogout = async () => {
        const success = await logout()
        if (success) router.push('/admin')
    }

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-900">

            {/* SIDEBAR GLOBAL */}
            <Sidebar />

            {/* MAIN LAYOUT */}
            <div className="md:pl-[260px]">

                {/* TOP BAR (NUEVO) */}
                <header className="
                    sticky top-0 z-30
                    flex items-center justify-between
                    px-6 py-4
                    border-b border-neutral-200 dark:border-neutral-800
                    bg-white/70 dark:bg-neutral-900/70
                    backdrop-blur-md
                    ">

                    <div className="flex items-center gap-3">
                        <AvatarAdmin />
                    </div>

                    <button
                        onClick={handlerLogout}
                        className="
                            inline-flex items-center gap-2
                            px-4 py-2 rounded-md text-sm font-semibold
                            border border-red-600 dark:border-red-700
                            text-red-700 dark:text-red-400 hover:text-white
                            hover:bg-red-600 dark:hover:bg-red-800
                            transition-all duration-200 cursor-pointer
                            "
                    >
                        <LogOut size={16} />
                        Cerrar sesión
                    </button>

                </header>

                {/* CONTENT */}
                <main className="
                    p-6 md:p-8
                    overflow-y-auto
                    ">
                    {children}
                </main>

            </div>

        </div>
    )
}