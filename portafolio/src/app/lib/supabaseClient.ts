import { createBrowserClient } from '@supabase/ssr'

export const createSupabaseBrowserClient = () => {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL_D!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY_D!
    )
}