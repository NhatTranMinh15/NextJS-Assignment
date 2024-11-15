import Link from 'next/link'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import getServerSession from "next-auth"
import { authConfig } from '@/auth.config';
import AdminSection from './AdminSection';
import NavBar from './NavBar';
import Search from './Search';
type Props = {}

const Header = async (props: Props) => {
    const data = getServerSession(authConfig);
    const session = await data.auth();

    return (
        <SessionProvider>
            <header className="short-header">
                <div className="row header-content">
                    <div className="logo">
                        <Link href="/">Author</Link>
                    </div>
                    <NavBar  >
                        {session ? <AdminSection session={session}></AdminSection> : <Link href="/admin/login" title="">Login</Link>}
                    </NavBar>
                </div>
            </header>
        </SessionProvider>
    )
}

export default Header