import { serialize } from "cookie"
import { NextResponse } from "next/server"

export async function POST() {
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
    }

    const res = NextResponse.json({ ok: true })
    res.headers.append('Set-Cookie', serialize('sb-access.token', '', { ...cookieOptions, maxAge: -1 }))
    res.headers.append('Set-Cookie', serialize('sb-refresh-token', '', { ...cookieOptions, maxAge: -1 }))
    return res
}