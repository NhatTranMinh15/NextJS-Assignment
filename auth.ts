import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginSchema } from './app/auth/login/validation';
import { userCredentials } from './app/lib/data';

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credential) {
            
            const parsedCredential = loginSchema.safeParse(credential);
            if (parsedCredential.success) {
                const { email, password } = parsedCredential.data;
                const user = userCredentials.find((u) => { return u.email === email })
                if (!user) return null;
                const passwordsMatch = user.password === password;
                if (passwordsMatch) return user;
            }
            console.log('Invalid credentials', credential);
            return null;
        }
    })],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
});