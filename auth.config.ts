import type { NextAuthConfig } from 'next-auth';
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/', '/blog']

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const loggedIn = !!auth?.user;
            const onAdminRoute = nextUrl.pathname.startsWith('/admin');
            if (onAdminRoute && !loggedIn) {
                return false
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;