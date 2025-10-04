'use client'
import React from 'react'
import Image from 'next/image'
import {FaArrowUp, FaRegFilePdf} from 'react-icons/fa6'
import './home-page.scss';
import {useRouter} from "next/navigation";

export default function HomePage() {
    const router = useRouter()

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
        <section className="header">
            <div className="header__col-left">
                <h4>Hola, soy César Reyes</h4>
                <h2>Desarrollador Web Fullstack</h2>
                <p>
                    Apasionado en crear aplicaciones web modernas con tecnologías como React, Next.js y Node.js.
                </p>
                <div className="header__action">
                    <button
                        onClick={goToProject}
                        className='btn action__btn action__btn--project'>
                        Ver proyectos
                        <FaArrowUp className='btn__icon btn__icon--arrowUp'/>
                    </button>
                    <button
                        onClick={downloadCv}
                        className='btn action__btn action__btn--download'>
                        Descargar CV
                        <FaRegFilePdf className='btn__icon'/>
                    </button>
                </div>
            </div>
            <div className="header__col-right">
                <Image
                    className='header__logo'
                    width={801}
                    height={512}
                    src='/web-developer.png'
                    alt='web developer'
                />
            </div>
        </section>
    )
}