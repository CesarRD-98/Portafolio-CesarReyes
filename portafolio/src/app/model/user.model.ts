import { Contact } from "./contact.model"
import { Project } from "./project.model"

export interface User {
    author: string
    bio: string
    contacts: Contact[]
    projects: Project[]
    year: number
}