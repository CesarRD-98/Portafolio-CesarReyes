'use client'

import Image from 'next/image'
import { useUserContext } from '../user.context'
import { useMemo, useState } from 'react'

type SkillType = 'frontend' | 'backend' | 'tools'; // base de datos
type SkillFilter = SkillType | 'all' // sirve solo UI

export default function LogosSkills() {
    const { user } = useUserContext()
    const [filter, setFilter] = useState<SkillFilter>('all')

    const filters = useMemo<SkillFilter[]>(() => {
        if (!user?.skills) return ['all']

        const types = new Set(user.skills.map(skill => skill.type))
        return ['all', ...Array.from(types)] as SkillFilter[]
    }, [user])


    const skills = useMemo(() => {
        if (!user?.skills) return []

        if (filter === 'all') return user.skills

        return user.skills.filter(skill => skill.type === filter)
    }, [user, filter])

    if (!user?.skills) return null

    return (
        <div className="flex flex-col gap-6">

            {/* FILTERS */}
            <div className="flex flex-wrap gap-2">
                {filters.map(value => {
                    const isActive: boolean = filter === value

                    return (
                        <button
                            key={value}
                            onClick={() => setFilter(value)}
                            className={`
                                    px-3 py-1.5 rounded-md text-sm font-medium
                                    transition-all duration-200 ease-out
                                    border border-transparent
                                    ${isActive
                                    ? 'bg-blue-600/75 dark:bg-blue-600/50 text-white'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                                }`}
                        >
                            {value === 'all'
                                ? 'Todos'
                                : value.charAt(0).toUpperCase() + value.slice(1)}
                        </button>
                    )
                })}
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        className="
                            flex flex-col items-center gap-2
                            p-3 rounded-lg
                            border border-neutral-200 dark:border-neutral-800
                            bg-white/50 dark:bg-neutral-900/50
                            backdrop-blur-sm
                            hover:-translate-y-[2px]
                            transition-all duration-200 ease-out">
                        <Image
                            width={36}
                            height={36}
                            src={skill.logo}
                            alt={skill.name}
                            className="object-contain"
                        />

                        <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}