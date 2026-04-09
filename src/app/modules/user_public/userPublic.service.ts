import { Contact, Project, Skill, User } from "./userPublic.types"
import { toCamelCase } from "@/app/utils/caseConverter"
import { getSupabaseBrowserClient } from "@/app/lib/supabase/browser"


export const UserPublicService = {
    getUserPublic: async (): Promise<User | null> => {
        const supabase = getSupabaseBrowserClient()
        const { data: profileData } = await supabase.from('profiles').select('*').maybeSingle()

        if (!profileData) { return null }

        const { data: contactsData } = await supabase.from('contacts').select('*')
        const { data: projectsData } = await supabase.from('projects').select('*').order('id', { ascending: true })
        const { data: skillsData } = await supabase.from('skills').select('*')

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