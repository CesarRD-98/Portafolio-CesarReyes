import React from 'react'
import Image from 'next/image'
import './home-page.scss'

export default function page() {
    return (
        <main>
            <section className="header-section">
                <h1>Perfil profesional</h1>
                <article>Este es mi perfil profesional como desarrollador web junior</article>
                <Image
                    className='avatar'
                    width={150}
                    height={150}
                    src='/avatar.png'
                    alt='avatar'
                />
            </section>
        </main>
    )
}