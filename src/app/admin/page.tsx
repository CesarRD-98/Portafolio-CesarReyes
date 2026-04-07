'use client'

import { FormEvent, useEffect, useState } from 'react'
import { FaRightToBracket } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { isEmail } from '../utils/isEmail'
import { AuthService } from '../modules/auth/auth.service'

export default function AdminPage() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const isValid =
        email.trim() !== '' &&
        password.trim() !== '' &&
        isEmail(email)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!isValid) return

        try {
            setLoading(true)
            setError(null)

            const success = await AuthService.login({ email, password })

            if (success) {
                router.push('/admin/dashboard')
            }
        } catch (err: unknown) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Error al iniciar sesión'
            )
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const emailError: string | null = (email.trim() !== "" && !isEmail(email)) ? "Formato de correo inválido" : null;
        setError(emailError)
    }, [email])



    return (
        <div className="
                min-h-screen flex items-center justify-center
                bg-white dark:bg-neutral-900
                px-4
                ">

            {/* CARD */}
            <div className="
                    w-full max-w-md
                    p-8 rounded-xl
                    border border-neutral-200 dark:border-neutral-800
                    bg-white/60 dark:bg-neutral-900/60
                    backdrop-blur-md
                    flex flex-col gap-6
                ">

                {/* HEADER */}
                <div>
                    <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        Acceso administrador
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Verifica tu identidad para continuar
                    </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* EMAIL */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-neutral-800 dark:text-neutral-200">
                            Correo
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                                px-3 py-2 rounded-md
                                border border-neutral-300 dark:border-neutral-700
                                bg-white dark:bg-neutral-800
                                text-sm
                                focus:outline-none focus:ring-2 focus:ring-blue-600/75"/>
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-neutral-800 dark:text-neutral-200">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="
                                px-3 py-2 rounded-md
                                border border-neutral-300 dark:border-neutral-700
                                bg-white dark:bg-neutral-800
                                text-sm
                                focus:outline-none focus:ring-2 focus:ring-blue-600/75"/>
                    </div>

                    {/* ERROR */}
                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={!isValid || loading}
                        className={`
                                mt-2 inline-flex items-center justify-center gap-2
                                px-4 py-2 rounded-md text-sm font-medium
                                transition-all duration-200 ease-out
                                ${isValid
                                ? 'bg-blue-600 text-white hover:bg-blue-500 cursor-pointer'
                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed'
                            }`}>
                        {loading ? (
                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        ) : (
                            <>
                                Verificar
                                <FaRightToBracket />
                            </>
                        )}
                    </button>

                </form>
            </div>

        </div>
    )
}