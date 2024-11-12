import Link from 'next/link'
import React from 'react'

type Props = {
    catLinks: Record<string, string>
    entryTitle: string;
    entryTitleLink: string;
}

const EntryHeader = ({catLinks, entryTitleLink, entryTitle}: Props) => {
    return (
        <div className="entry-header">

            <div className="entry-meta">
                <span className="cat-links">
                    {
                        Object.entries(catLinks).map(([n, l]) => {
                            return <Link href={l}>{n}</Link>
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

export default EntryHeader