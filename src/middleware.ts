import {NextRequest, NextResponse} from 'next/server';

const protectedRoutes = ['/profile', '/add-pet', '/messages'];
export const authRoutes = ['/signin', '/signup'];

export default function middleware(request: NextRequest) {
    const userToken = request.cookies.get('userToken')?.value;
    const path = request.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.includes(path);
    const isAuthRoute = authRoutes.includes(path);

    if (isProtectedRoute && !userToken) {
        request.cookies.delete('userToken');

        const response = NextResponse.redirect(new URL('/signin', request.url));
        response.cookies.delete('userToken');

        return response;
    }

    if (isAuthRoute && userToken) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
