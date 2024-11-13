import { User } from '@/app/models/User'
import Image from 'next/image'
import React from 'react'

type Props = {
    author: User
}

const AuthorProfile = ({ author }: Props) => {
    return (
        <div className="author-profile">
            <Image src="/images/avatars/user-05.jpg" alt="" width={400} height={400} />

            <div className="about">
                <h4><a href={author.profileLink}>{author.name}</a></h4>

                <p>{author.about}</p>

                <ul className="author-social">
                    {author.socialLinks.map(l => {
                        return <li><a href={l.link}>{l.name}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AuthorProfile