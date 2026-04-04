'use client'

import './projects-page.scss'
import { useUserContext } from '@/app/context/user_profile/user.provider';
import ProjectCardComponent from '@/app/components/project_card/projectCard';
import Loading from '@/app/components/loading/loading';
import { Section } from '../layout/Section';

export default function ProjectsPage() {
    const { user, loading, error } = useUserContext()

    if (loading || !user) return <Loading />
    if (error) return alert(error)

    return (
        <Section
            id='projects'
            title='Proyectos Destacados'
            description='Una selección de proyectos que reflejan mi experiencia en el desarrollo web y movil'
            className='projects-section'
        >
            <div className="card-container">
                <ProjectCardComponent />
            </div>
        </Section>
    )
}

