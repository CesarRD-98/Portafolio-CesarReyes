import { NextResponse } from "next/server"

export async function POST() {
    const response = NextResponse.json({ success: true })
    
    clearCookie(response, 'sb-access-token')
    clearCookie(response, 'sb-refresh-token')

    return response
}

//function to clear cookie
const clearCookie = (response: NextResponse, name: string) => {
    response.cookies.set(name, '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: -1
    })
}