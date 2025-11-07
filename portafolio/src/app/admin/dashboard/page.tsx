'use client'
import ThemeButton from '@/app/components/theme_button/themeButton'
import React from 'react'
import './dashboard-page.scss'
import {useWindowWidthContext} from "@/app/context/window_width/windowWidth.provider";
import AvatarAdmin from "@/app/components/avatar_admin/avatarAdmin";
import {FaArrowRightFromBracket} from 'react-icons/fa6'
import SideBarAccordion from "@/app/components/side_bar_accordion/sideBarAccordion";

export default function DashboardPage() {
    const {windowWidth} = useWindowWidthContext()
    return (
        <div className="grid">
            <aside className="col-span-1">
                <AvatarAdmin/>
                <SideBarAccordion/>
                {windowWidth !== 0 && (<ThemeButton/>)}
                <button className="btn">Cerrar sesión <FaArrowRightFromBracket/></button>
            </aside>
            <main className="col-span-5">
                <h4>Dashboard</h4>
            </main>
        </div>
    )
}
