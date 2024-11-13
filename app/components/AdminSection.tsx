import Link from 'next/link'
import React from 'react'
import Logout from './Logout'
import { Session } from 'next-auth'
import { signOut } from '@/auth'

type Props = {
    session: Session
}

const AdminSection = ({ session }: Props) => {
    return (
        <li className="has-children">
            <Link href={''} className=' text-black font-bold'>
                Welcome, {session.user?.email}
            </Link>
            <ul className="sub-menu">
                <li><Link href="/admin/contacts">Contacts</Link></li>
                <li>
                    <form className="" action={async () => { 'use server'; await signOut({ redirectTo: '/' }); }}>
                        <button className="logout-btn mt-0">
                            Log Out
                        </button>
                    </form>
                </li>
            </ul>
        </li>
    )
}

export default AdminSection