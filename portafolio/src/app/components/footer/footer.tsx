'use client'
import React from 'react'
import './footer.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider'

export default function Footer() {
    const { user } = useUserContext()

    return (
        <footer>
            {user && (<p>&copy; {user?.year} {user?.author}.</p>)}
            <p>César Reyes.</p>
        </footer>
    )
}
