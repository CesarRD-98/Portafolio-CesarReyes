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
            shortBio: `Creo en el poder del código para construir ideas que conecten con las personas. Busco que cada proyecto tenga propósito, detalle y una experiencia que se disfrute.`,
            fullBio: `Soy César Reyes, un desarrollador web en constante crecimiento que disfruta crear, aprender y mejorar cada línea de código. Me apasiona construir 
            aplicaciones que no solo funcionen bien, sino que también transmitan una buena experiencia al usuario. Aspiro a desarrollarme como fullstack, 
            unir la lógica del backend con el diseño del frontend y formar parte de proyectos que representen un verdadero desafío. 
            Soy autodidacta, curioso y persistente, siempre con la intención de seguir aprendiendo y compartir lo que sé con otros desarrolladores.`,
            learningFocus: `Actualmente estoy profundizando en React y React Native, además de aprender sobre servicios en la nube con AWS y temas esenciales como IP, 
            hosting y DNS. Mi objetivo es fortalecer mi visión técnica y práctica para construir soluciones más completas y escalables.`,
            year: 2025,
            contacts: [
                { id: 1, title: 'phone', value: '+504 9843 5672' },
                { id: 2, title: 'email', value: 'dedioscesar12@gmail.com' },
                { id: 3, title: 'linkedin', value: 'Cesar De Dios' },
                { id: 4, title: 'github', value: 'CesarRD-98' }
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
                {
                    id: 3,
                    title: 'Sistema de Gestión de Tiques',
                    description: 'Sitio web desarrollado para gestionar tiques de soporte, asignación a técnicos y seguimiento del estado de resolución.',
                    imgUrl: '/dev-icon.png',
                    stack: ['React', 'Next.js', 'Sass', 'TypeScript', 'Vercel', 'Clean Code'],
                    role: 'Desarrollador Fullstack',
                    link: 'https://github.com/CesarRD-98/Portafolio-CesarReyes/tree/main'
                },
            ],
            skills: [
                { id: 1, name: 'React', logo: '/logos/react-original.svg', type: 'frontend' },
                { id: 2, name: 'React Native', logo: '/logos/reactnative-original.svg', type: 'frontend' },
                { id: 3, name: 'Next.js', logo: '/logos/nextjs-original.svg', type: 'frontend' },
                { id: 4, name: 'Angular', logo: '/logos/angular-original.svg', type: 'frontend' },
                { id: 5, name: 'Node.js', logo: '/logos/nodejs-original.svg', type: 'backend' },
                { id: 6, name: 'NestJS', logo: '/logos/nestjs-original.svg', type: 'backend' },
                { id: 7, name: 'Express.js', logo: '/logos/express-original.svg', type: 'backend' },
                { id: 8, name: 'TypeScript', logo: '/logos/typescript-original.svg', type: 'frontend' },
                { id: 9, name: 'Sass', logo: '/logos/sass-original.svg', type: 'frontend' },
                { id: 10, name: 'MySQL', logo: '/logos/mysql-original.svg', type: 'backend' },
                { id: 11, name: 'PostgreSQL', logo: '/logos/postgresql-original.svg', type: 'backend' },
                { id: 12, name: 'Git', logo: '/logos/git-original.svg', type: 'tools' },
                { id: 13, name: 'GitHub', logo: '/logos/github-original.svg', type: 'tools' },
                { id: 14, name: 'Postman', logo: '/logos/postman-original.svg', type: 'tools' },
                { id: 15, name: 'Vercel', logo: '/logos/vercel-original.svg', type: 'tools' }
            ]
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
