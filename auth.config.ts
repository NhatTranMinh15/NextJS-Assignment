import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const loggedIn = !!auth?.user;
            const onAdminRoute = nextUrl.pathname.startsWith('/admin');
            const onAuthRoute = nextUrl.pathname.startsWith('/auth');
            if (onAdminRoute && !loggedIn) {
                return false
            }
            if(onAuthRoute && loggedIn){
                return false
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;