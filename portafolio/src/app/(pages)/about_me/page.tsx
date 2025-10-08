'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './aboutMe-page.scss'
import LogosSkills from '@/app/components/logos_skills/logosSkills'
import { useUser } from '@/app/context/user_profile/user.provider'
import { renderHighlightedText } from '@/app/utils/renderText'

export default function AboutMePage() {
  const router = useRouter()
  const { user } = useUser()

  const goToContact = () => {
    router.push('/contact')
  }

  const fullBioWords = ["César Reyes", "fullstack", "autodidacta", "curioso", "persistente"];
  const learningFocusWords = ["React Native", "React", "AWS", "IP", "hosting", "DNS"];

  return (
    <section className="about">
      <h1 className='about__title'>Quién soy</h1>
      <p className='about__description'>{renderHighlightedText(user?.fullBio ?? '', fullBioWords)}</p>

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
    </section>

  )
}
