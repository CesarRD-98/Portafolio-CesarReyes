'use client'
import React, { useState } from 'react'

export default function ProfilePage() {
    const [shortBio, setShortBio] = useState<string>('')
    return (
        <div className="">
            <h4>Perfil</h4>
            <div className="">
                <div className="autor">
                    <label htmlFor="">Autor</label>
                    <input type="text" defaultValue={''} />
                </div>
                <div className="avatar">
                    <input type="file" />
                </div>
                <div className="full-bio">
                    <label htmlFor="">Biografia completar</label>
                    <input type="text" defaultValue={''} />
                </div>
                <div className="short-bio">
                    <label htmlFor="">Biografia corta</label>
                    <input type="text" value={shortBio} onChange={(e) => setShortBio(e.target.value)} />
                </div>
            </div>
        </div>
    )
}
