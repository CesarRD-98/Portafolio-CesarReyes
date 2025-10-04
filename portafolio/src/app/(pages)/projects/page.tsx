import React from 'react'
import Image from "next/image";
import './projects-page.scss'

export default function ProjectsPage() {
    return (
        <section className="body">
            <h4>Mis proyectos académicos realizados</h4>
            <div className="cards-container">
                <div className="card">
                    <Image
                        className='card-img'
                        src='/dev-icon.png'
                        alt='dev icon'
                        width={770}
                        height={512}/>
                    <div className="card-body">
                        <h5>App móvil con React Native y Expo, con backend en Express.js</h5>
                        <p>Cesar Reyes De Dios</p>
                        <button className='btn'>Ver más</button>
                    </div>
                </div>
                <div className="card">
                    <Image
                        className='card-img'
                        src='/dev-icon.png'
                        alt='dev icon'
                        width={770}
                        height={512}/>
                    <div className="card-body">
                        <h5>Sistema de tiques con React+Next.js, con backend es Nest.js</h5>
                        <p>Cesar Reyes De Dios</p>
                        <button className='btn'>Ver más</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

