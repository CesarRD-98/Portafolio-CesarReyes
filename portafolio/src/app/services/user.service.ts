import { supabasePublic } from "../lib/supabasePublic"
import { User } from "../model/user.model"
import { toCamelCase } from "../utils/caseConverter"

export const UserService = {
    getUser: async (): Promise<User | null> => {
        const { data: profilesData } = await supabasePublic.from('profiles').select('*').single()
        const { data: contacts } = await supabasePublic.from('contacts').select('*')
        const { data: projects } = await supabasePublic.from('projects').select('*').order('id', { ascending: true })
        const { data: skills } = await supabasePublic.from('skills').select('*')

        return toCamelCase({
            ...profilesData,
            contacts,
            projects,
            skills
        })
    },
}