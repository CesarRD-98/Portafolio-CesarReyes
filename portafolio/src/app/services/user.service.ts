import { supabasePublic } from "../lib/supabasePublic"
import { Contact } from "../model/contact.model"
import { Project } from "../model/project.model"
import { Skill } from "../model/skill.model"
import { User } from "../model/user.model"
import { toCamelCase } from "../utils/caseConverter"

export const UserService = {
    getUser: async (): Promise<User | null> => {
        const { data: profileData } = await supabasePublic.from('profiles').select('*').maybeSingle()

        if (!profileData) { return null }

        const { data: contactsData } = await supabasePublic.from('contacts').select('*')
        const { data: projectsData } = await supabasePublic.from('projects').select('*').order('id', { ascending: true })
        const { data: skillsData } = await supabasePublic.from('skills').select('*')

        const profile = toCamelCase(profileData) as Omit<User, 'contacts' | 'projects' | 'skills'>
        const contacts: Contact[] = toCamelCase(contactsData) as Contact[]
        const projects: Project[] = toCamelCase(projectsData) as Project[]
        const skills: Skill[] = toCamelCase(skillsData) as Skill[]

        const result: User = {
            ...profile,
            contacts,
            projects,
            skills,
        }

        return result
    }
}