import { supabase } from "@/app/lib/supabaseClient"
import { serialize } from "cookie"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { email, password } = await req.json()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error || !data.session) {
        return NextResponse.json({ error: error?.message ?? 'Login failed' }, { status: 401 })
    }

    const { access_token, refresh_token } = data.session

    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/'
    }

    const res = NextResponse.json({ ok: true })

    res.headers.append('Set-Cookie', serialize('sb-access-token', access_token, { ...cookieOptions, maxAge: 60 * 60 }))
    res.headers.append('Set-Cookie', serialize('sb-refresh-token', refresh_token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 30 }))

    return res
}