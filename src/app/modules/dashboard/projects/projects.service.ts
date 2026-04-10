import { AppError } from "@/app/lib/errors/appError"
import { mapSupabaseError } from "@/app/lib/errors/errorMapper"
import { getSupabaseBrowserClient } from "@/app/lib/supabase/browser"
import { Projects } from "./projects.type"
import { toCamelCase } from "@/app/utils/caseConverter"

export const ProjectsService = {
    getProjects: async (): Promise<Projects[]> => {
        const supabase = getSupabaseBrowserClient()
        const { data: { user }, error: AuthError } = await supabase.auth.getUser()
        if (AuthError || !user) { throw new AppError("error", 'Usuario no autenticado'); }

        const { data, error } = await supabase.from("projects").select('*').eq('user_id', user.id)
        if (error) { throw mapSupabaseError(error) }
        if (!data) { throw new AppError("warning", 'Usuario no encontrado'); }
        return toCamelCase(data) as Projects[]
    }
}