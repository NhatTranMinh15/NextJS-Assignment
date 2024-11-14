import React from 'react'
import getServerSession from "next-auth"
import { authConfig } from '@/auth.config';
import ContactForm from './contactForm';
import { SessionProvider } from 'next-auth/react';
type Props = {}

const ContactWrapper = async (props: Props) => {
    const data = getServerSession(authConfig);
    const session = await data.auth();
    return (
        <SessionProvider>
            <ContactForm ></ContactForm>
        </SessionProvider>
    )
}

export default ContactWrapper