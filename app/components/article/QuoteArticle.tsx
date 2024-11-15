import React from 'react'
import { Article } from '@/app/models/Blog'

type Props = {
    article: Article
}

const QuoteArticle = ({ article }: Props) => {
    return (
        <article className="brick entry format-quote animate-this">
            <div className="entry-thumb">
            <blockquote>
                {article.quotes ? article.quotes.map(q => (q)) : ""}
            </blockquote>
            </div>
        </article>
    )
}

export default QuoteArticle