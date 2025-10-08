'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowUp, FaRegFilePdf } from 'react-icons/fa6'
import './home-page.scss';
import { useRouter } from "next/navigation";
import { useUser } from '../context/user_profile/user.provider';

export default function HomePage() {
    const router = useRouter()
    const { user } = useUser()

    const goToProject = () => {
        router.push('/projects')
    }

    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = '/CV_CesarReyes.pdf'
        link.download = 'Cesar_Reyes_CV.pdf'
        link.click()
    }

    return (
        <>
            {user !== null ? (
                <section className="section">
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
                                onClick={downloadCv}
                                className='btn action__btn action__btn--download'>
                                Descargar CV
                                <FaRegFilePdf className='btn__icon' />
                            </button>
                        </div>
                    </div>
                    <div className="section__col-right">
                        <Image
                            className='section__logo'
                            width={801}
                            height={512}
                            src='/web-developer.png'
                            alt='web developer'
                        />
                    </div>
                </section>
            ) : (
                <section className="section"></section>
            )}
        </>
    )
}