import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const loggedIn = !!auth?.user;
            
            const onAdminAuthRoute = nextUrl.pathname.startsWith('/admin/login');
            if (onAdminAuthRoute && !loggedIn) {
                return true
            }

            const onAdminRoute = nextUrl.pathname.startsWith('/admin');
            if (onAdminRoute && !loggedIn) {
                return false
            }

            const onAuthRoute = nextUrl.pathname.startsWith('/auth');
            if (onAuthRoute && loggedIn) {
                return false
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;