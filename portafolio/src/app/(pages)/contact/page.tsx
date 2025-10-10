'use client'
import React from 'react'
import './contact-page.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider'
import ContactCard from '@/app/components/contact_card/contactCard'
import Loading from '@/app/components/loading/loading'

export default function ContacPage() {
    const { user, loading, error } = useUserContext()

    if (loading) return <Loading />
    if (error) return alert(error)

    return (
        <section className='contact-section'>
            {user && (
                <>
                    <h1 className='title'>Contáctame</h1>
                    <p className='description'>
                        Si quieres ponerte en contacto conmigo, dejo los siguientes medios para que te comuniques conmigo
                        directamente
                    </p>
                    <div className='card-container'>
                        <ContactCard />
                    </div>
                </>
            )}

        </section>
    )
}
