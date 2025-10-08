'use client'
import React from 'react'
import './footer.scss'
import { useUser } from '@/app/context/user_profile/user.provider'

export default function Footer() {
    const { user } = useUser()

    return (
        <footer>
            {user === null ? <p>Todos los derechos resevados.</p> :
                <p>&copy; {user?.year} {user?.author}. Todos los derechos resevados.</p>}
        </footer>
    )
}
