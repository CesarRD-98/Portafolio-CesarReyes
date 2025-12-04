import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

    if (req.nextUrl.pathname.startsWith('/admin/dashboard')) {
        const access = req.cookies.get('sb-access-token')?.value || null

        if (!access) {
            const url = req.nextUrl.clone()
            url.pathname = '/admin'
            return NextResponse.redirect(url)
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/dashboard/:path*']
}