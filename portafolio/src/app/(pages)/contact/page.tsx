import React from 'react'
import './contac-page.scss'
import {FaPhone, FaEnvelope} from 'react-icons/fa6'
import {FaLinkedin} from 'react-icons/fa'

export default function page() {
    const phoneNumber: string = '98435672'
    const profileLinkedIn: string = 'César De Dios'
    const email: string = 'dedioscesar12@gmail.com'

    const phoneNumberFormat: string = phoneNumber.replace(/\B(?=(\d{4})+(?!\d))/g, "-")

    return (
        <section className='section'>
            <h1 className='title'>Contáctame</h1>
            <p className='description'>
                Si quieres ponerte en contacto conmigo, dejo los siguientes medios para que te comuniques conmigo
                directamente
            </p>
            <div className='card-container'>
                <div className="card">
                    <h4>Teléfono</h4>
                    <FaPhone size={24}/>
                    <p>+504 {phoneNumberFormat}</p>
                </div>
                <br/>
                <div className="card">
                    <h4>LinkedIn</h4>
                    <FaLinkedin size={24}/>
                    <p>{profileLinkedIn}</p>
                </div>
                <br/>
                <div className="card">
                    <h4>Correo</h4>
                    <FaEnvelope size={24}/>
                    <p>{email}</p>
                </div>
            </div>
        </section>
    )
}
