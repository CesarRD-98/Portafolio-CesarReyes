import { createBrowserClient } from '@supabase/ssr'
import { Database } from './types/supabase'

export const createSupabaseBrowserClient = () => {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL_D!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY_D!
    )
}