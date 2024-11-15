import { Article } from "@/app/models/Blog";
import { GalleryThumbnail } from "./ArticleThumbnail";
import ArticleHeader from "./ArticleHeader";


type Props = {
    article: Article
}

const GalleryArticle = ({ article }: Props) => {
    return (
        <article className="brick entry format-gallery animate-this">
            <GalleryThumbnail postImages={article.slider || []}></GalleryThumbnail>
            <div className="entry-text">
                <ArticleHeader catLinks={article.categories} entryTitle={article.title} entryTitleLink={article.link}></ArticleHeader>
                <div className="entry-excerpt">
                    {article.excerpt}
                </div>
            </div>
        </article>
    )
}

export default GalleryArticle