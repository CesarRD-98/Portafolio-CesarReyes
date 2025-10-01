'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import './navbar.scss'
import {usePathname} from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState<number>(0)

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

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
        <nav>
            <div
                onClick={toggleMenu}
                className='menu-toggle'>
                <FaBars size={24}/>
            </div>
            <div className="logo">
                <Link href={'/'}>
                    <Image
                        className='logo-image'
                        src="/dev-icon.png"
                        alt="logo"
                        height={512}
                        width={512}/>
                </Link>
            </div>

            <div className="navbar-desktop">
                <ul className='navbar'>
                    <li>
                        <Link href={'/'} className='link'>Inicio</Link>
                    </li>
                    <li>
                        <Link href={'/projects'} className='link'>Mis proyectos</Link>
                    </li>
                    <li>
                        <Link href={'/about-me'} className='link'>Sobre mí</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className='link'>Contacto</Link>
                    </li>
                </ul>
            </div>

            {/* For mobiles */}
            <div className={`overlay ${isOpenMenu ? 'active' : 'close'}`} onClick={toggleMenu}>
                <ul className='navbar' onClick={(e) => e.stopPropagation()}>
                    <li>
                        <Link href={'/'} className='link'>Inicio</Link>
                    </li>
                    <li>
                        <Link href={'/project'} className='link'>Mis projectos</Link>
                    </li>
                    <li>
                        <Link href={'/about-me'} className='link'>Sobre mí</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className='link'>Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
