import React from 'react'
import { Contact } from '@/app/model/contact.model'
import { contactIcon, contactType } from '@/app/utils/contactIcon'
import styles from './contactCard.module.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider'
import Link from 'next/link'

export default function ContactCard() {
    const { user } = useUserContext()
    const contacts: Contact[] = user?.contacts ?? []

    return (
        <>
            {contacts.length > 0 ? (
                contacts.map(contact => {

                    const hasLink: boolean = !!contact.linkUrl
                    const cardContent = (
                        <>
                            <h4 className={styles.title}>{contactType[contact.title]}</h4>
                            {contactIcon[contact.title]}
                            <p className={styles.value}>{contact.value}</p>
                        </>

                    )

                    return hasLink ? (
                        <Link
                            key={contact.id}
                            href={contact.linkUrl!}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`${styles.card} ${styles.link}`}
                        >
                            {cardContent}
                        </Link>
                    ) : (
                        <div className={styles.card} key={contact.id}>
                            {cardContent}
                        </div>
                    )
                })

            ) : (
                <p>No hay registro de contactos</p>
            )}
        </>
    )
}
