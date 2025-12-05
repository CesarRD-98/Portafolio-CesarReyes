'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowUp, FaUser } from 'react-icons/fa6'
import './home-page.scss';
import { useRouter } from "next/navigation";
import { useUserContext } from '../context/user_profile/user.provider';
import Loading from '../components/loading/loading';
import Layout from '../components/layout/layout';
import { Section } from './layout/Section';

export default function HomePage() {
    const router = useRouter()
    const { user, loading, error } = useUserContext()

    const goToProject = () => {
        router.push('/projects')
    }

    const goToAboutMe = () => {
        router.push('/about_me')
    }

    if (loading || !user) return <Loading />
    if (error) return alert(error)

    return (
        <Layout
            title='César Reyes - Desarrollador Web Fullstack'
            description='Portafolio de César Reyes, desarrollador web fullstack'
        >
            <Section id='home' className='home'>
                <div className="home__col-left">
                    <h4>Hola, soy {user.author}</h4>
                    <h2>Desarrollador Web Fullstack</h2>
                    <p>{user.shortBio}</p>
                    <div className="action">
                        <button
                            onClick={goToProject}
                            className='btn action__btn action__btn--project'>
                            Ver proyectos
                            <FaArrowUp className='btn__icon btn__icon--arrowUp' />
                        </button>
                        <button
                            onClick={goToAboutMe}
                            className='btn action__btn action__btn--aboutme'>
                            Sobre mí
                            <FaUser className='btn__icon' />
                        </button>
                    </div>
                </div >
                <div className="home__col-right">
                    <Image
                        className='logo-image'
                        height={210}
                        width={330}
                        src='/web-developer.png'
                        alt='web developer'
                        priority
                    />
                </div>
            </Section>
        </Layout>

    )
}