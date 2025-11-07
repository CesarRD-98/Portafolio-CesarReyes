import React, {useEffect, useMemo, useState} from 'react'
import {FaChevronRight} from 'react-icons/fa6'
import styles from './side-bar-accordion.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";

type MenuItem = { label: string; href: string }
type MenuSection = { id: string; label: string; items: MenuItem[] }
const menu: readonly MenuSection[] = [
    {
        id: 'profile',
        label: 'Perfil',
        items: [
            {label: 'Ver perfil', href: '/admin/dashboard/profile'},
            {label: 'Editar perfil', href: '/admin/dashboard/profile/edit'},
        ]
    },
    {
        id: 'projects',
        label: 'Proyectos',
        items: [
            {label: 'Ver proyectos', href: '/admin/dashboard/projects'},
            {label: 'Editar o eliminar', href: '/admin/dashboard/projects/edit'},
            {label: 'Nuevo', href: '/admin/dashboard/projects/new'},
        ]
    },
    {
        id: 'contacts',
        label: 'Contactos',
        items: [
            {label: 'Ver contactos', href: '/admin/dashboard/contacts'},
            {label: 'Editar o eliminar', href: '/admin/dashboard/contacts/edit'},
            {label: 'Nuevo', href: '/admin/dashboard/contacts/new'},
        ]
    },
    {
        id: 'skills',
        label: 'Habilidades',
        items: [
            {label: 'Ver habilidades', href: '/admin/dashboard/skills'},
            {label: 'Editar o eliminar', href: '/admin/dashboard/skills/edit'},
            {label: 'Nuevo', href: '/admin/dashboard/skills/new'},
        ]
    }
] as const

type SectionId = string | null

function getSectionForPath(sections: readonly MenuSection[], path: string): SectionId {
    if (!path) return null
    const found = sections.find(section => section.items.some(i => path.startsWith(i.href)))
    return found?.id ?? null
}

type ChevronProps = { open: boolean }

function Chevron({open}: ChevronProps) {
    return <FaChevronRight className={`${styles.chevron} ${open ? styles.chevron_open : ''}`} aria-hidden/>
}

type NavLinkProps = { href: string, label: string, active: boolean }

function NavLink({label, href, active}: NavLinkProps) {
    return (
        <Link href={href} className={`${styles.navlink} ${active ? styles.active : ''}`}>
            {label}
        </Link>
    )
}

export default function SideBarAccordion() {

    const pathname = usePathname()
    const safePath = pathname ?? ""
    const derivedOpenId = useMemo(() => getSectionForPath(menu, safePath), [safePath])
    const [openId, setOpenId] = useState<SectionId>(derivedOpenId)

    useEffect(() => {
        if (derivedOpenId && derivedOpenId !== openId) {
            setOpenId(derivedOpenId)
        }
    }, [openId, derivedOpenId]);


    return (
        <nav className={`${styles.sidebar}`} aria-label="Menú de dashboard">
            <ul className={styles.section_list}>
                {menu.map(section => {
                    const isOpen = openId === section.id
                    const buttonId = `${section.id}-button`
                    const panelId = `${section.id}-panel`
                    return (
                        <li key={section.id} className={styles.section}>
                            <button id={buttonId} aria-expanded={isOpen} aria-controls={panelId}
                                    className={styles.section_button}
                                    onClick={() => setOpenId(prev => prev === section.id ? null : section.id)}>
                                <span>{section.label}</span>
                                <Chevron open={isOpen}/>
                            </button>
                            <div id={panelId} role='region' aria-labelledby={buttonId}
                                 className={`${styles.panel} ${isOpen ? styles.panel_open : styles.panel_closed}`}>
                                <ul className={styles.item_list}>
                                    {section.items.map(item => (
                                        <li key={item.href} className={styles.item}>
                                            <NavLink href={item.href} label={item.label}
                                                     active={safePath.startsWith(item.href)}/>
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