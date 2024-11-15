import { Article } from "@/app/models/Blog";
import { StandardThumbnail } from "./ArticleThumbnail";
import ArticleHeader from "./ArticleHeader";


type Props = {
    article: Article
}

const StandardArticle = ({ article }: Props) => {
    return (
        <article className="brick entry format-standard animate-this">
            <StandardThumbnail linkHref={article.link} thumb={article.thumbnail} ></StandardThumbnail>
            <div className="entry-text">
                <ArticleHeader catLinks={article.categories} entryTitle={article.title} entryTitleLink={article.link}></ArticleHeader>
                <div className="entry-excerpt">
                    {article.excerpt}
                </div>
            </div>
        </article>
    )
}

export default StandardArticle