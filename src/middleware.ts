import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './app/utils/auth';

export function middleware(req: NextRequest) {
    console.log('Middleware executed');

    const token = req.cookies.get('auth-token');

    if (!req.nextUrl.pathname.startsWith('/auth/sign-in')) {
        if (!token || !verifyToken(token)) {
            const url = req.nextUrl.clone();
            url.pathname = '/auth/sign-in';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*',
        '/staff/:path*',
        '/auth/:path*',
        '/',
        '/payment-voucher/:path*',
        '/payroll/:path*',
        '/memo/:path*',
        '/circulars/:path*',
        '/maintenance/:path*',
        '/logistics/:path*',
        '/office-budget/:path*',
        '/stocksAndInventory/:path*',
        '/notifications/:path*',
        '/capacityBuilding/:path*',
        '/procurements/:path*'
    ],
}