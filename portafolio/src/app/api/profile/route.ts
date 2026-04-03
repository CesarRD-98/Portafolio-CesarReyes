import { apiHandler } from "@/app/lib/api/apiHandler";
import { ApiResponder } from "@/app/lib/api/apiResponder";
import { requireAuth } from "@/app/lib/api/requiredAuth";

export const GET = apiHandler(async () => {
    const { supabase, response, user } = await requireAuth();

    if (response) { return response }
    if (!supabase) { return ApiResponder.serverError("Failed to connect to database") }

    const { data, error } = await supabase.from('profiles').select('*').eq('id', user?.id).single();

    if (error) {
        return ApiResponder.unauthorized(
            error.message ?? "Failed to fetch user profile"
        )
    };

    return ApiResponder.ok(data);
});