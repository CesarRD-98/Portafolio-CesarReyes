import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"
import { Database } from "./types/supabase"

type SupabaseCookie = {
    name: string
    value: string
    options?: {
        domain?: string
        path?: string
        expires?: Date
        maxAge?: number
        secure?: boolean
        httpOnly?: boolean
        sameSite?: boolean | "lax" | "strict" | "none"
    }
}

export const createSupabaseServerClient = async () => {
    const cookieStore = await cookies()

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL_D!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY_D!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll().map((cookie) => ({
                        name: cookie.name,
                        value: cookie.value,
                    }))
                },

                setAll(cookiesToSet: SupabaseCookie[]) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set({
                                name,
                                value,
                                ...options,
                            })
                        })
                    } catch { }
                },
            },
        }
    )
}