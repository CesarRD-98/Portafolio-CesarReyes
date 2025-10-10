'use client'
import React from 'react'
import './projects-page.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider';
import ProjectCardComponent from '@/app/components/project_card/projectCard';
import Loading from '@/app/components/loading/loading';

export default function ProjectsPage() {
    const { user, loading, error } = useUserContext()

    if (loading) return <Loading />
    if (error) return alert(error)

    return (
        <section className="projects-section">
            {user && (
                <>
                    <h4 className='title-section'>Proyectos Destacados</h4>
                    <p className='description-section'>Una selección de proyectos que reflejan mi experiencia en el desarollo web y movil</p>
                    <div className="card-container">
                        {user && (
                            <ProjectCardComponent />
                        )}
                    </div>
                </>
            )}
        </section>
    )
}

