import React, { useEffect, useMemo, useState } from 'react'
import { FaListUl } from 'react-icons/fa6'
import styles from './sidebar-accordion.module.scss'
import { usePathname } from "next/navigation";
import { getSectionForPath, SectionId } from './sectionForPath';
import { menu } from './sidebarMenu';
import { Chevron } from './chevron';
import { NavLink } from './navlink';
import DashboardButton from './dashboardButton';

export default function SideBarAccordion() {

    const pathname = usePathname()
    const safePath = pathname ?? ""
    const derivedOpenId = useMemo(() => getSectionForPath(menu, safePath), [safePath])
    const [openId, setOpenId] = useState<SectionId>(derivedOpenId)

    useEffect(() => {
        setOpenId(prev => {
            if (!derivedOpenId) return null
            return prev !== derivedOpenId ? derivedOpenId : prev
        })
    }, [derivedOpenId]);


    return (
        <nav className={`${styles.sidebar}`} aria-label="Menú de dashboard">
            <ul className={styles.section_list}>
                <DashboardButton />
                {menu.map(section => {
                    const isOpen = openId === section.id
                    const buttonId = `${section.id}-button`
                    const panelId = `${section.id}-panel`
                    return (
                        <li key={section.id} className={styles.section}>
                            <button
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className={styles.section_button}
                                onClick={() => setOpenId(prev => prev === section.id ? null : section.id)}
                            >
                                <span className={styles.span}><FaListUl aria-hidden /> {section.label}</span>
                                <Chevron open={isOpen} />
                            </button>
                            <div
                                id={panelId}
                                role='region'
                                aria-labelledby={buttonId}
                                className={`${styles.panel} ${isOpen ? styles.panel_open : styles.panel_closed}`}
                            >
                                <ul className={styles.item_list}>
                                    {section.items.map(item => (
                                        <li key={item.href} className={styles.item}>
                                            <NavLink
                                                href={item.href}
                                                label={item.label}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}