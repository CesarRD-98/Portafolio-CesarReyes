'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import './navbar.scss'
import { useWindowWidthContext } from '@/app/context/window_width/windowWidth.provider'
import ThemeButton from '../theme_button/themeButton'

export default function Navbar() {
    const pathname = usePathname()
    const { windowWidth } = useWindowWidthContext()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)


    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

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
                        height={200}
                        width={300}
                        priority
                    />
                    <h4>CesarDev</h4>
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
                {windowWidth !== 0 && (<ThemeButton />)}
            </div>

            {/* For mobiles */}
            <div className={`overlay ${isOpenMenu ? 'active' : 'close'}`} onClick={toggleMenu}>
                <ul className='nav__menu' onClick={(e) => e.stopPropagation()}>
                    <li>
                        <h4 className='nav__menu--title'>Menú</h4>
                    </li>
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
