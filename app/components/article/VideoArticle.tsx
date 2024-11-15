import { Article } from '@/app/models/Blog'
import React from 'react'
import { StandardThumbnail } from './ArticleThumbnail'
import ArticleHeader from './ArticleHeader'

type Props = {
    article: Article
}

const VideoArticle = ({ article }: Props) => (
    <article className="brick entry format-video animate-this">
        <StandardThumbnail linkHref={article.video || ""} thumb={article.thumbnail} thumbStyle='video-image'></StandardThumbnail>
        <div className="entry-text">
            <ArticleHeader catLinks={article.categories} entryTitle={article.title} entryTitleLink={article.link}></ArticleHeader>
            <div className="entry-excerpt">
                {article.excerpt}
            </div>
        </div>
    </article>
)

export default VideoArticle