'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { FaRightToBracket } from 'react-icons/fa6'
import './admin-page.scss'
import { useRouter } from 'next/navigation'
import { isEmail } from '../utils/isEmail'
import { supabase } from '../lib/supabaseClient'

export default function AdminPage() {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isValid) return

        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        }

        router.push('/admin/dashboard')
        resetForm()
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setError(null)
        setIsValid(false)
        setLoading(false)
    }

    useEffect(() => {
        const emailRequired: boolean = email.trim() !== '' ? true : false
        const passwordRequired: boolean = password.trim() !== '' ? true : false
        const isEmailValid = (): boolean => {
            if (!isEmail(email)) {
                setError('Ingresa un correo válido')
                return false
            } else {
                setError(null)
            }
            return true
        }

        setIsValid(() => {
            if (emailRequired && passwordRequired && isEmailValid()) {
                return true
            }
            return false
        })
    }, [email, password])



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
                {error && <p className="error-message">{error}</p>}
                <button
                    className={`btn btn-submit ${!isValid ? 'btn-disabled' : ''}`}
                    type='submit'
                    disabled={!isValid}
                    onClick={handleSubmit}
                >
                    {loading ? (
                        <div className="spinner"></div>
                    ) : (
                        <>
                            Verificar
                            < FaRightToBracket />
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
