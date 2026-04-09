export interface Contact {
    id: number
    userId: number
    title: string
    type: string
    value: string
    linkUrl?: string
    isPrimary: boolean
}

export interface Project {
    id: number
    userId: number
    title: string
    description: string
    imgUrl: string
    stack: string[]
    role: string
    link: string
}

export interface Skill {
    id: number
    userId: number
    name: string
    logo: string
    type: string
}

export interface User {
    author: string
    shortBio: string
    fullBio: string
    cvUrl: string
    learningFocus: string
    year: number
    contacts: Contact[]
    projects: Project[]
    skills: Skill[]
}