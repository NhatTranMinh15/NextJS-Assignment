import Link from 'next/link'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import getServerSession from "next-auth"
import { authConfig } from '@/auth.config';
import AdminSection from './AdminSection';
import NavBar from './NavBar';
type Props = {}

const Header = async (props: Props) => {
    const data = getServerSession(authConfig);
    const session = await data.auth();

    return (
        <SessionProvider>

            <header className="short-header">

                <div className="gradient-block"></div>

                <div className="row header-content">

                    <div className="logo">
                        <Link href="/">Author</Link>
                    </div>

                    <NavBar  >
                        {session ? <AdminSection session={session}></AdminSection> : <Link href="/admin/login" title="">Login</Link>}
                    </NavBar>

                    <div className="search-wrap">

                        <form role="search" method="get" className="search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Your Keywords" defaultValue="" name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="search-submit" defaultValue="Search" />
                        </form>

                        <Link href="/#" id="close-search" className="close-btn">Close</Link>

                    </div>

                    <div className="triggers">
                        <Link className="search-trigger" href="/#"><i className="fa fa-search"></i></Link>
                        <Link className="menu-toggle" href="/#"><span>Menu</span></Link>
                    </div>

                </div>

            </header>
        </SessionProvider>
    )
}

export default Header