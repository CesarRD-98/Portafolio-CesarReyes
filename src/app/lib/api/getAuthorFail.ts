import { requireAuth } from "@/app/lib/api/requiredAuth";
import { ApiResponder } from "@/app/lib/api/apiResponder";
import { TypedSupabaseClient } from "../types/supabase.type";
import { User } from "@supabase/supabase-js";


export async function getAuthOrFail(): Promise<{ supabase: TypedSupabaseClient; user: User }> {
    const { supabase, response, user } = await requireAuth();

    if (response) throw response;
    if (!supabase) throw ApiResponder.serverError("DB connection failed");
    if (!user) throw ApiResponder.unauthorized("User not authenticated");

    return {
        supabase: supabase as TypedSupabaseClient,
        user,
    };
}