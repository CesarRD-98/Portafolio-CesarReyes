import { parse } from "cookie";
import { NextRequest, NextResponse } from "next/server";

export function ProtectedRoutesMiddleware(req: NextRequest) {
    const url = req.nextUrl.clone()
    if (url.pathname.startsWith('/admin')) {
        const cookieHeader = req.headers.get('cookie') || ''
        const cookies = parse(cookieHeader)
        const access = cookies['sb-access-token']
        if (!access) {
            url.pathname = '/admin'
            return NextResponse.redirect(url)
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/dashboard/:path*']
}