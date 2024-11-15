'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(prevState: any, formData: FormData,) {
    try {
        formData.append("redirectTo", "/admin/contacts");
        await signIn('credentials', formData,);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { ...prevState, error: "Invalid credentials.", status: "ERROR" }
                default:
                    return { ...prevState, error: "Something went wrong.", status: "ERROR" }
            }
        }
        throw error;
    }
}