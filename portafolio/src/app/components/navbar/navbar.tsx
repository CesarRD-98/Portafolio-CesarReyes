'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useThemeContext } from "@/app/context/changeTheme/theme.provider";
import { FiSun, FiMoon } from 'react-icons/fi';
import './navbar.scss'

export default function Navbar() {
    const pathname = usePathname()
    const { theme, toggleTheme } = useThemeContext()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState<number>(0)

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const currentTheme: boolean = theme === 'light'

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (windowWidth > 768) setIsOpenMenu(false)
    }, [windowWidth])

    useEffect(() => {
        setIsOpenMenu(false)
    }, [pathname])

    return (
        <nav className='nav'>
            <div
                onClick={toggleMenu}
                className='nav__toggle'>
                <FaBars size={24} />
            </div>
            <div className="nav__logo">
                <Link href={'/'} className='nav__logo-link'>
                    <Image
                        className='nav__logo-image'
                        src="/dev-icon.png"
                        alt="logo"
                        height={512}
                        width={770} />
                    <h4>Developer</h4>
                </Link>
            </div>

            <ul className='nav__menu nav__menu--desktop'>
                <li>
                    <Link href={'/'} className='nav__menu-item'>Inicio</Link>
                </li>
                <li>
                    <Link href={'/projects'} className='nav__menu-item'>Mis proyectos</Link>
                </li>
                <li>
                    <Link href={'/about_me'} className='nav__menu-item'>Sobre mí</Link>
                </li>
                <li>
                    <Link href={'/contact'} className='nav__menu-item'>Contacto</Link>
                </li>
            </ul>

            <div className='nav__theme'>
                {windowWidth !== 0 && (
                    <button onClick={toggleTheme} className='btn nav__theme--btn'>
                        {currentTheme ? <FiSun size={18} /> : <FiMoon size={18} />}
                        {windowWidth > 768 && (
                            currentTheme ? 'claro' : 'oscuro'
                        )}
                    </button>
                )}
            </div>

            {/* For mobiles */}
            <div className={`overlay ${isOpenMenu ? 'active' : 'close'}`} onClick={toggleMenu}>
                <ul className='nav__menu' onClick={(e) => e.stopPropagation()}>
                    <li>
                        <Link href={'/'} className='nav__menu-item'>Inicio</Link>
                    </li>
                    <li>
                        <Link href={'/projects'} className='nav__menu-item'>Mis proyectos</Link>
                    </li>
                    <li>
                        <Link href={'/about_me'} className='nav__menu-item'>Sobre mí</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className='nav__menu-item'>Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
