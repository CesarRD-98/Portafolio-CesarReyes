'use client'
import React from 'react'
import './contact-page.scss'
import { useUser } from '@/app/context/user_profile/user.provider'
import ContactCard from '@/app/components/contact_card/contactCard'

export default function ContacPage() {
    const { user } = useUser()

    return (
        <section className='contact-section'>
            <h1 className='title'>Contáctame</h1>
            <p className='description'>
                Si quieres ponerte en contacto conmigo, dejo los siguientes medios para que te comuniques conmigo
                directamente
            </p>
            {user !== null && (
                <div className='card-container'>
                    <ContactCard />
                </div>
            )}
        </section>
    )
}
