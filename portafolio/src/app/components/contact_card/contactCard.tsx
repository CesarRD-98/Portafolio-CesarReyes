import React from 'react'
import { Contact } from '@/app/model/contact.model'
import { contactIcon, contactType } from '@/app/utils/contactIcon'
import styles from './contactCard.module.scss'
import { useUser } from '@/app/context/user_profile/user.provider'

export default function ContactCard() {
    const { user } = useUser()
    const contacts: Contact[] = user?.contacts ?? []

    return (
        <>
            {contacts.length > 0 ? (
                contacts.map(c => (
                    <div className={styles.card} key={c.id}>
                        <h4 className={styles.title}>{contactType[c.title]}</h4>
                        {contactIcon[c.title]}
                        <p className={styles.value}>{c.value}</p>
                    </div>
                ))
            ) : (
                <p>No hay registro de contactos</p>
            )}
        </>
    )
}
