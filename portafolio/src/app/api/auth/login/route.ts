import { supabase } from "@/app/lib/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error || !data.session) {
            const errorMessage = error?.message ?? 'Invalid login credentials'
            const status = error?.status ?? 401
            return NextResponse.json(
                { success: false, error: { message: errorMessage, status } },
                { status }
            )
        }

        const { access_token, refresh_token } = data.session
        const response = NextResponse.json({ success: true, data: { user: data.user ?? null } })

        response.cookies.set('sb-access-token', access_token, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60,
        })

        response.cookies.set('sb-refresh-token', refresh_token, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30,
        })

        return response
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
        return NextResponse.json(
            { success: false, error: { message: errorMessage, status: 500 } },
            { status: 500 }
        )

    }
}