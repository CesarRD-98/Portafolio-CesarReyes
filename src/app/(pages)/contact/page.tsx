'use client'
import './contact-page.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider'
import ContactCard from '@/app/components/contact_card/contactCard'
import Loading from '@/app/components/loading/loading'
import { Section } from '../layout/Section'

export default function ContacPage() {
    const { user, loading, error } = useUserContext()

    if (loading || !user) return <Loading />
    if (error) return alert(error)

    return (
        <Section
            id='contact-section'
            title='Contáctame'
            description='Si quieres ponerte en contacto conmigo, dejo los siguientes medios para que te comuniques conmigo directamente'
            className='contact-section'
        >
            <div className='card-container'>
                <ContactCard />
            </div>
        </Section>
    )
}
