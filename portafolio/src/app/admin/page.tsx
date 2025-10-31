'use client'
import React, { FormEvent, useState } from 'react'
import { FaRightToBracket } from 'react-icons/fa6'
import './admin-page.scss'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        router.push('/admin/dashboard')
    }

    return (
        <div className='admin-page-container'>
            <h3 className='title'>Verifica que eres el administrador</h3>
            <form className="form-container">
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-submit" type='submit' onClick={handleSubmit}>Verificar <FaRightToBracket /></button>
            </form>
        </div>
    )
}
