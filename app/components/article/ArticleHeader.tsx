import { TLink } from '@/app/models/General';
import Link from 'next/link'
import React from 'react'

type Props = {
    catLinks: TLink[]
    entryTitle: string;
    entryTitleLink: string;
}

const ArticleHeader = ({ catLinks, entryTitleLink, entryTitle }: Props) => {
    return (
        <div className="entry-header">

            <div className="entry-meta">
                <span className="cat-links">
                    {
                        catLinks.map((link) => {
                            return <Link href={link.link}>{link.name}</Link>
                        })
                    }
                </span>
            </div>

            <h1 className="entry-title">
                <Link href={entryTitleLink}>{entryTitle}</Link>
            </h1>

        </div>
    )
}

export default ArticleHeader