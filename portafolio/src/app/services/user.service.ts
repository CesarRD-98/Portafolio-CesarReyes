import { supabase } from "../lib/supabase"
import { User } from "../model/user.model"
import { toCamelCase } from "../utils/caseConverter"

export const UserService = {
    getUser: async (): Promise<User | null> => {
        const { data: profilesData } = await supabase.from('profiles').select('*').single()
        const { data: contacts } = await supabase.from('contacts').select('*')
        const { data: projects } = await supabase.from('projects').select('*').order('id', { ascending: true })
        const { data: skills } = await supabase.from('skills').select('*')

        return toCamelCase({
            ...profilesData,
            contacts,
            projects,
            skills
        })
    },
}