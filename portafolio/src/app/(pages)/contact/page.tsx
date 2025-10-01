import React from 'react'

export default function page() {
    const phoneNumber: string = '98435672'
    const profileLinkedIn: string = 'César De Dios'
    const email: string = 'dedioscesar12@gmail.com'

    const phoneNumberFormat: string = phoneNumber.replace(/\B(?=(\d{4})+(?!\d))/g, "-")

    return (
        <div>
            <h1>Contáctame</h1>
            <p>
                Si quieres ponerte en contacto conmigo, dejo los siguientes medios para que te comuniques conmigo
                directamente
            </p>
            <br/>
            <div className="card">
                <h4>Teléfono</h4>
                <p>+504 {phoneNumberFormat}</p>
            </div>
            <br/>
            <div className="card">
                <h4>LinkedIn</h4>
                <p>{profileLinkedIn}</p>
            </div>
            <br/>
            <div className="card">
                <h4>Correo</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}
