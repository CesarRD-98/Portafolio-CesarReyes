import { apiHandler } from "@/app/lib/api/apiHandler"
import { ApiResponder } from "@/app/lib/api/apiResponder"
import { createSupabaseServerClient } from "@/app/lib/supabaseServer"
import { NextRequest } from "next/server"

export const POST = apiHandler(async (req: NextRequest) => {
    const { email, password } = await req.json()

    if (!email || !password) {
        return ApiResponder.badRequest("Email and password are required")
    }

    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password, })

    if (error || !data.session) {
        return ApiResponder.unauthorized(
            error?.message ?? "Invalid login credentials"
        )
    }

    return ApiResponder.ok(data.user ?? null)
})