'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './aboutMe-page.scss'
import LogosSkills from '@/app/components/logos_skills/logosSkills'
import { useUserContext } from '@/app/context/user_profile/user.provider'
import { renderHighlightedText } from '@/app/utils/renderText'
import ViewCv from "@/app/components/view_cv_button/viewCv";
import Loading from '@/app/components/loading/loading'

export default function AboutMePage() {
    const router = useRouter()
    const { user, error, loading } = useUserContext()

    const goToContact = () => {
        router.push('/contact')
    }

    if (loading) return <Loading />
    if (error) return alert(error)

    const fullBioWords = ["César Reyes", "fullstack", "autodidacta", "curioso", "persistente"];
    const learningFocusWords = ["React Native", "React", "AWS", "IP", "hosting", "DNS"];

    return (
        <section className="about">
            {user && (
                <>
                    <h1 className='about__title'>Quién soy</h1>
                    <p className='about__description'>{renderHighlightedText(user?.fullBio ?? '', fullBioWords)}</p>
                    <ViewCv />

                    <div className="about__skills">
                        <h4 className='about__skills-title'>Tecnologías y Herramientas</h4>
                        <div className="about__skills-logos">
                            <LogosSkills />
                        </div>
                    </div>

                    <div className="about__interests">
                        <h4 className='about__interests-title'>Intereses y Aprendizajes Actuales</h4>
                        <p className='about__interests-description'>{renderHighlightedText(user?.learningFocus ?? '', learningFocusWords)}</p>
                    </div>

                    <button onClick={goToContact} className="about__btn">
                        Contáctame <FaArrowUp className='about__btn-icon' />
                    </button>
                </>
            )}
        </section>
    )
}
