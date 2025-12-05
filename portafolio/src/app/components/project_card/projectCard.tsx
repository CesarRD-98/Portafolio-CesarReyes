import { useUserContext } from '@/app/context/user_profile/user.provider'
import { Project } from '@/app/model/project.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import styles from './projectCard.module.scss'

export default function ProjectCardComponent() {
    const { user } = useUserContext()
    const projects: Project[] = user?.projects ?? []

    return (
        <>
            {projects.length > 0 ? (
                projects.map(project => (
                    <div className={styles.card} key={project.id}>
                        <div className={styles.img_container}>
                            <Image
                                src={project.imgUrl}
                                alt={project.title}
                                className={styles.img_cover}
                                height={180}
                                width={230}
                            />
                        </div>
                        <div className={styles.body}>
                            <h4 className={styles.title}>{project.title}</h4>
                            <p className={styles.description}>{project.description}</p>
                            <p className={styles.stack}>{project.stack.join(', ')}</p>
                            <p className={styles.role}>{project.role}</p>
                            <Link
                                href={project.link}
                                className={styles.link}
                                target='_blank'
                                rel='noopener noreferrer'>
                                Github
                                <FaArrowUp className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p className='description'>Aun no hay proyectos para mostrar</p>
            )}
        </>
    )
}
