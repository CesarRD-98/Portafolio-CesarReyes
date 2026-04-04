import { ApiResponder } from "./apiResponder"
import { createSupabaseServerClient } from "../supabaseServer"
import type { User } from "@supabase/supabase-js"

type RequireAuthResult = {
    user: User | null
    supabase: Awaited<ReturnType<typeof createSupabaseServerClient>> | null
    response: Response | null
}

export const requireAuth = async (): Promise<RequireAuthResult> => {
    const supabase = await createSupabaseServerClient()

    const { data: { user }, error, } = await supabase.auth.getUser()

    if (error || !user) {
        return {
            user: null,
            supabase: null,
            response: ApiResponder.unauthorized(),
        }
    }

    return {
        user,
        supabase,
        response: null,
    }
}