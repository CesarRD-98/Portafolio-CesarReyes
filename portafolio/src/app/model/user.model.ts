import { Contact } from "./contact.model"
import { Project } from "./project.model"
import { Skill } from "./skill.model"

export interface User {
    author: string
    shortBio: string
    fullBio: string
    learningFocus: string
    year: number
    contacts: Contact[]
    projects: Project[]
    skills: Skill[]
}