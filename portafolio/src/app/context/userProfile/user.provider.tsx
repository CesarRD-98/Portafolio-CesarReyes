'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './user.context'
import { ChildrenModel } from '@/app/model/children.model'
import { User } from '@/app/model/user.model'

export default function UserProvider({ children }: ChildrenModel) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        setUser({
            author: 'César Reyes',
            bio: 'Apasionado en crear aplicaciones web modernas con tecnologías como React, Next.js y Node.js.',
            contacts: [
                { id: 1, title: 'phone', value: '+504 9843 5672' },
                { id: 2, title: 'email', value: 'dedioscesar12@gmail.com' },
                { id: 3, title: 'linkedin', value: 'Cesar De Dios' }
            ],
            projects: [
                {
                    id: 1,
                    title: 'App de Presupuesto Personal',
                    description: 'Aplicación móvil que permite registrar gastos, definir presupuestos y visualizar el progreso financiero de cada periodo.',
                    imgUrl: '/dev-icon.png',
                    stack: ['React Native', 'Expo', 'Axios', 'Express.js', 'JWT', 'Multer', 'MySQL'],
                    role: 'Desarrollador Full Stack',
                    link: 'https://github.com/CesarRD-98/proyecto-DAM1-Q2-2025/tree/main'
                },
                {
                    id: 2,
                    title: 'Portafolio Personal',
                    description: 'Sitio web desarrollado para mostrar proyectos, perfil profesional y habilidades técnicas, aplicando buenas prácticas de desarrollo moderno.',
                    imgUrl: '/dev-icon.png',
                    stack: ['React', 'Next.js', 'Sass', 'TypeScript', 'Vercel', 'Clean Code'],
                    role: 'Desarrollador Frontend',
                    link: 'https://github.com/CesarRD-98/Portafolio-CesarReyes/tree/main'
                },
            ],
            year: 2025
        })
    }, [])

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
