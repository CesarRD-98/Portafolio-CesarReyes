import { useUser } from '@/app/context/userProfile/user.provider'
import { Project } from '@/app/model/project.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import styles from './projectCard.module.scss'

export default function ProjectCardComponent() {
    const { user } = useUser()
    const projects: Project[] = user?.projects ?? []

    return (
        <>
            {projects.length > 0 ? (
                projects.map(p => (
                    <div className={styles.card} key={p.id}>
                        <Image src={p.imgUrl} alt={p.title} width={160} height={100} />
                        <div className={styles.body}>
                            <h4 className={styles.title}>{p.title}</h4>
                            <p className={styles.description}>{p.description}</p>
                            <p className={styles.stack}>{p.stack.join(', ')}</p>
                            <p className={styles.role}>{p.role}</p>
                            <Link href={p.link} className={styles.link}>
                                Github
                                <FaArrowUp className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Aun no hay proyectos para mostrar</p>
            )}
        </>
    )
}
