import { BlogMetadata as BlogMetadataModel, parseDate } from '@/app/models/Blog';
import React from 'react'

type Props = {
    metatdata: BlogMetadataModel;
}

const BlogMetadata = ({ metatdata }: Props) => {
    return (
        <ul className="entry-meta">
            <li className="date">
                {parseDate(metatdata.date)}
            </li>
            <li className="cat">
                {
                    metatdata.categories.map((c) => {
                        return <a href={c.link}>{c.name}</a>
                    })
                }
            </li>
        </ul>
    )
}

export default BlogMetadata