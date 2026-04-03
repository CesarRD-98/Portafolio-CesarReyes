import { apiHandler } from "@/app/lib/api/apiHandler";
import { ApiResponder } from "@/app/lib/api/apiResponder";
import { requireAuth } from "@/app/lib/api/requiredAuth";
import { toCamelCase } from "@/app/utils/caseConverter";

export const GET = apiHandler(async () => {
    const { supabase, response, user } = await requireAuth();

    if (response) { return response }
    if (!supabase) { return ApiResponder.serverError("Failed to connect to database") }

    const { data, error } = await supabase.from('profiles').select('*').eq('id', user?.id).maybeSingle();

    if (error) {
        return ApiResponder.serverError("Failed to fetch profile data")
    };

    return ApiResponder.ok(toCamelCase(data) ?? null);
});