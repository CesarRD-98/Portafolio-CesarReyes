'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/about_me', label: 'Sobre mí' },
    { href: '/contact', label: 'Contacto' },
]

export function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(prev => !prev)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <nav className="w-full bg-white/70 backdrop-blur-md dark:bg-neutral-900/70 sticky top-0 z-50 shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-12 h-12">
                            <Image
                                src="https://rekydsbimkpqukrlqkbi.supabase.co/storage/v1/object/public/Images/icon-nav.webp"
                                alt="Logo Developer"
                                fill
                                sizes='40px'
                                className="object-contain"
                                priority
                            />
                        </div>

                        <span className="font-semibold text-base tracking-tight">
                            CesarDev
                        </span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map(link => {
                            const isActive = pathname === link.href

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`
                                                px-4 py-2 rounded-md text-sm font-medium
                                                transition-all duration-200 ease-out
                                                border border-transparent
                                                hover:-translate-y-[1px]
                                                focus:outline-none focus:ring-2 focus:ring-blue-500/30
                                                ${isActive
                                                ? 'text-blue-600 dark:text-white bg-blue-100 dark:bg-blue-900/75'
                                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800'
                                            }`}>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition cursor-pointer"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`
                        fixed inset-0 bg-black/40 backdrop-blur-sm z-40
                        transition-opacity duration-300
                        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
                        `} />

            {/* MOBILE MENU */}
            <div
                className={`
                        fixed top-0 left-0 h-full w-72
                        bg-white/95 backdrop-blur-md dark:bg-neutral-900/95
                        z-50 shadow-lg
                        transform transition-transform duration-300 ease-in-out
                        ${open ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-base font-semibold tracking-tight">
                        Menú
                    </h2>
                </div>

                <ul className="flex flex-col gap-2 p-4">
                    {navLinks.map(link => {
                        const isActive = pathname === link.href

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`
                                            block px-4 py-3 rounded-md text-sm font-medium
                                            transition-all duration-200 ease-out
                                            border border-transparent
                                            focus:outline-none focus:ring-2 focus:ring-blue-500/30
                                            active:scale-[0.98]
                                            ${isActive
                                            ? 'text-blue-600 dark:text-white bg-blue-100 dark:bg-blue-900/75'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800'
                                        }`}>
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}