'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowUp, FaUser } from 'react-icons/fa6'
import './home-page.scss';
import { useRouter } from "next/navigation";
import { useUserContext } from '../context/user_profile/user.provider';
import Loading from '../components/loading/loading';

export default function HomePage() {
    const router = useRouter()
    const { user, loading, error } = useUserContext()

    const goToProject = () => {
        router.push('/projects')
    }

    const goToAboutMe = () => {
        router.push('/about_me')
    }

    if (loading) return <Loading />
    if (error) return alert(error)

    return (
        <section className="section">
            {user && (
                <>
                    <div className="section__col-left">
                        <h4>Hola, soy {user?.author}</h4>
                        <h2>Desarrollador Web Fullstack</h2>
                        <p>{user?.shortBio}</p>
                        <div className="section__action">
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
                    <div className="section__col-right">
                        <Image
                            className='section__logo'
                            height={512}
                            width={801}
                            src='/web-developer.png'
                            alt='web developer'
                        />
                    </div>
                </>
            )}
        </section >
    )
}