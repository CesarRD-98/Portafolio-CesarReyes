'use client'
import React from 'react'
import './projects-page.scss'
import { useUser } from '@/app/context/user_profile/user.provider';
import ProjectCardComponent from '@/app/components/project_card/projectCard';

export default function ProjectsPage() {
    const { user } = useUser()

    return (
        <section className="projects-section">
            <h4 className='title-section'>Proyectos Destacados</h4>
            <p className='description-section'>Una selección de proyectos que reflejan mi experiencia en el desarollo web y movil</p>
            <div className="card-container">
                {user && (
                    <ProjectCardComponent />
                )}
            </div>
        </section>
    )
}

