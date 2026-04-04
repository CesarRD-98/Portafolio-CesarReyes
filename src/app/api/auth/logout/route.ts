import { apiHandler } from "@/app/lib/api/apiHandler"
import { ApiResponder } from "@/app/lib/api/apiResponder"
import { createSupabaseServerClient } from "@/app/lib/supabaseServer"

export const POST = apiHandler(async () => {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut()
    return ApiResponder.ok({ message: "Logged out successfully" })
})