'use client'
import { useUserContext } from '@/app/context/user_profile/user.provider'
import Image from 'next/image'
import styles from './logosSkills.module.scss'
import { Skill } from '@/app/model/skill.model'
import { useEffect, useState } from 'react'
import { SkillType } from '@/app/types/skill.type'
import { FilterArray } from '@/app/utils/filterSkill'

export default function LogosSkills() {
    const { user } = useUserContext()
    const [skills, setSkills] = useState<Skill[]>([])
    const [filter, setFilter] = useState<SkillType>('all')

    useEffect(() => {
        setSkills(user?.skills ?? [])
    }, [user])


    const filterSkills = (type: SkillType): void => {
        if (type === 'all') {
            setSkills(user?.skills ?? [])
        } else {
            setSkills(user?.skills.filter(skill => skill.type === type) || [])
        }
    }

    return (
        <div className={styles.skill_container}>
            <div className={styles.skill_actions}>
                {FilterArray.map(value => (
                    <button
                        onClick={() => {
                            setFilter(value)
                            filterSkills(value)
                        }}
                        key={value}
                        className={`${styles.btn} ${filter === value ? styles.active : ''}`}>
                        {value === 'all' ? 'Todos' : value.charAt(0).toUpperCase() + value.slice(1)}
                    </button>
                ))}
            </div>
            <div className={styles.skill_logo}>
                {skills.length > 0 ? (
                    skills.map(skill => (
                        <div key={skill.id} className={styles.item}>
                            <Image
                                className={styles.logo}
                                width={40}
                                height={40}
                                src={skill.logo}
                                alt={skill.name}
                            />
                            <p className={styles.name}>{skill.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron habilidades.</p>
                )}
            </div>
        </div>
    )
}
