import { supabase } from "@/app/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ success: false, error: { message: 'Email and password are required', status: 400 } }, { status: 400 })
        }

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

        setCookie(response, 'sb-access-token', access_token, 60 * 60)
        setCookie(response, 'sb-refresh-token', refresh_token, 60 * 60 * 24 * 30)

        return response
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
        return NextResponse.json(
            { success: false, error: { message: errorMessage, status: 500 } },
            { status: 500 }
        )

    }
}


// function to set cookie
const setCookie = (response: NextResponse, name: string, value: string, maxAge: number) => {
    response.cookies.set(name, value, {
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge,
    })
}