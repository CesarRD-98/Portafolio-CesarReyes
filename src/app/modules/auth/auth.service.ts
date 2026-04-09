import { getSupabaseBrowserClient } from '@/app/lib/supabase/browser';
import { mapSupabaseError } from '@/app/lib/errors/errorMapper';
import { AppError } from '@/app/lib/errors/appError';
import { LoginDto } from './auth.types';

export const AuthService = {
    login: async (dto: LoginDto): Promise<void> => {
        const supabase = getSupabaseBrowserClient();
        const { error } = await supabase.auth.signInWithPassword(dto);

        if (error) {
            throw mapSupabaseError(error);
        }
    },

    logout: async (): Promise<boolean> => {
        const supabase = getSupabaseBrowserClient();
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw new AppError('error', 'Error al cerrar sesión');
        }

        return true
    },
};