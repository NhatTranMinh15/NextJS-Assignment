import { Article } from '@/app/models/Blog'
import React from 'react'
import ArticleHeader from './ArticleHeader'
import { AudioThumbnail } from './ArticleThumbnail'

type Props = {
    article: Article
}
const AudioArticle = ({ article }: Props) => {
    return (
        <article className="brick entry format-audio animate-this">
            <AudioThumbnail linkHref={article.link} thumb={article.thumbnail} audio={article.audio || ""} ></AudioThumbnail>
            <div className="entry-text">
                <ArticleHeader catLinks={article.categories} entryTitle={article.title} entryTitleLink={article.link}></ArticleHeader>
                <div className="entry-excerpt">
                    {article.excerpt}
                </div>
            </div>
        </article>)
}

export default AudioArticle