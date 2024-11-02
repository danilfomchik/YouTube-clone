import {NextRequest, NextResponse} from 'next/server';

import {AuthSearchParamsValues} from './app/components/Buttons/LoginButton/types';
import {SearchParamsKeys, StorageKeys} from './app/services/types';

const protectedRoutes = ['/profile'];
export const authRoutes = [
    `?${SearchParamsKeys.authKey}=${AuthSearchParamsValues.signUpValue}`,
    `?${SearchParamsKeys.authKey}=${AuthSearchParamsValues.signInValue}`,
];

export default function middleware(request: NextRequest) {
    const userId = request.cookies.get(StorageKeys.userId)?.value;
    const path = request.nextUrl.pathname;
    const search = request.nextUrl.search;

    const isProtectedRoute = protectedRoutes.includes(path);
    const isAuthRoute = authRoutes.includes(search);

    if (isProtectedRoute && !userId) {
        request.cookies.delete(StorageKeys.userId);

        const response = NextResponse.redirect(
            new URL(`/?${SearchParamsKeys.authKey}=${AuthSearchParamsValues.signInValue}`, request.url),
        );
        response.cookies.delete(StorageKeys.userId);

        return response;
    }

    if (isAuthRoute && userId) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
