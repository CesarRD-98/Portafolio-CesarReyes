import { createBrowserClient } from '@supabase/ssr';
import { Database } from './types/Database';

let client: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function getSupabaseBrowserClient() {
    if (!client) {
        client = createBrowserClient<Database>(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_KEY!,
            {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false
                }
            }
        );
    }

    return client;
}