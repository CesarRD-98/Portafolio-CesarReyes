'use client'
import AvatarAdmin from '@/app/components/avatar_admin/avatarAdmin'
import SideBarAccordion from '@/app/components/sidebar_accordion/sideBarAccordion'
import ThemeButton from '@/app/components/theme_button/themeButton'
import { useWindowWidthContext } from '@/app/context/window_width/windowWidth.provider'
import { ChildrenModel } from '@/app/model/children.model'
import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import './layout.scss'
import { logoutServiceAuth } from '@/app/services/auth.service'
import { useRouter } from 'next/navigation'

export default function DashboardLayout({ children }: ChildrenModel) {
    const { windowWidth } = useWindowWidthContext()
    const router = useRouter()

    const handlerLogout = async () => {
        const response = await logoutServiceAuth()
        if (response) {
            router.push('/admin')
        }
    }
    return (
        <div className="grid">
            <aside className="aside">
                <AvatarAdmin />
                <SideBarAccordion />
                {windowWidth !== 0 && (<ThemeButton />)}
                <button
                    className="btn btn-logout"
                    onClick={handlerLogout}
                >
                    Cerrar sesión <FaArrowRightFromBracket />
                </button>
            </aside>
            <main className="main">
                {children}
            </main>
        </div>
    )
}
