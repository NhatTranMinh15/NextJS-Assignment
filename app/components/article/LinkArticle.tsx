import { Article } from '@/app/models/Blog'
import Link from 'next/link'
import React from 'react'

type Props = {
    article: Article
}
const LinkArticle = ({ article }: Props) => {
    return (
        <article className="brick entry format-link animate-this">
            <div className="entry-thumb">
                <div className="link-wrap">
                    <p>{article.title}</p>
                    <cite>
                        <Link target="_blank" href={article.link}>{article.link}</Link>
                    </cite>
                </div>
            </div>
        </article>
    )
}

export default LinkArticle