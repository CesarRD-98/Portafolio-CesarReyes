import { supabase } from "../lib/supabaseClient"
import { Contact } from "../model/contact.model"
import { Project } from "../model/project.model"
import { Skill } from "../model/skill.model"
import { User } from "../model/user.model"
import { toCamelCase, toSnakeCase } from "../utils/caseConverter"

export const UserService = {
    async getUser(id: number): Promise<User | null> {
        const { data: profilesData } = await supabase.from('profiles').select('*').eq('id', id).single()
        
        if (!profilesData) return null

        const { data: contacts } = await supabase.from('contacts').select('*').eq('user_id', id)
        const { data: projects } = await supabase.from('projects').select('*').eq('user_id', id).order('id', { ascending: true })
        const { data: skills } = await supabase.from('skills').select('*').eq('user_id', id)

        return toCamelCase({
            ...profilesData,
            contacts,
            projects,
            skills
        })
    },

    async addProject(project: Project) {
        await supabase.from('projects').insert(toSnakeCase(project))
    },

    async updateProject(projectId: number, project: Partial<Project>) {
        await supabase.from('projects').update(toSnakeCase(project)).eq('id', projectId)
    },

    async deleteProject(projectId: number) {
        await supabase.from('projects').delete().eq('id', projectId)
    },

    async addContact(contact: Contact) {
        await supabase.from('contacts').insert(toSnakeCase(contact))
    },

    async updateContact(contactId: number, contact: Partial<Contact>) {
        await supabase.from('contacts').update(toSnakeCase(contact)).eq('id', contactId)
    },

    async deleteContact(contactId: number) {
        await supabase.from('contacts').delete().eq('id', contactId)
    },

    async addSkill(skill: Skill) {
        await supabase.from('skills').insert(toSnakeCase(skill))
    },

    async updateSkill(skillId: number, skill: Partial<Skill>) {
        await supabase.from('skills').update(toSnakeCase(skill)).eq('id', skillId)
    },

    async deleteSkill(skillId: number) {
        await supabase.from('skills').delete().eq('id', skillId)
    }
}