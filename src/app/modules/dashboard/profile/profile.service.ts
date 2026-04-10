import { mapSupabaseError } from "@/app/lib/errors/errorMapper";
import { getSupabaseBrowserClient } from "@/app/lib/supabase/browser"
import { Profile } from "./profile.types";
import { toCamelCase, toSnakeCase } from "@/app/utils/caseConverter";
import { AppError } from "@/app/lib/errors/appError";
import { uploadFile } from "@/app/lib/supabase/storage/uploadFile";
import { mapFormDataToProfile } from "@/app/lib/mappers/profile.mapper";

export const ProfileService = {
    getProfile: async (): Promise<Profile> => {
        const supabase = getSupabaseBrowserClient()
        const { data: { user }, error: AuthError } = await supabase.auth.getUser()

        if (AuthError || !user) { throw new AppError('error', 'Usuario no autenticado'); }

        const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();

        if (error) { throw mapSupabaseError(error) }
        if (!data) { throw new AppError("warning", 'Usuario no encontrado'); }

        return toCamelCase(data) as Profile
    },

    updateProfile: async (formData: FormData) => {
        const supabase = getSupabaseBrowserClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) { throw new AppError('error', 'Usuario no autenticado'); }

        const avatar = formData.get('avatar') as File | null;
        const cv = formData.get('cv') as File | null;

        let avatarUrl: string | null = null;
        let cvUrl: string | null = null;

        if (avatar) { avatarUrl = await uploadFile(supabase, avatar, user.id, 'avatar'); }
        if (cv) { cvUrl = await uploadFile(supabase, cv, user.id, 'cv'); }

        const updateData = mapFormDataToProfile(formData)

        if (avatarUrl) updateData.avatarUrl = avatarUrl;
        if (cvUrl) updateData.cvUrl = cvUrl;
        if (Object.keys(updateData).length === 0) { throw new AppError('warning', 'No hay cambios para guardar'); }

        const { error } = await supabase.from('profiles').update(toSnakeCase(updateData)).eq('id', user.id);

        if (error) { throw mapSupabaseError(error); }
    }
}

