import { Article as ArticleModel, EntryType } from '@/app/models/Blog'
import StandardArticle from './StandardArticle'
import QuoteArticle from './QuoteArticle'
import GalleryArticle from './GalleryArticle'
import AudioArticle from './AudioArticle'
import LinkArticle from './LinkArticle'
import VideoArticle from './VideoArticle'

type Props = {
    article: ArticleModel
}

const Article = ({ article }: Props) => {
    switch (article.type) {
        case EntryType.FORMAT_AUDIO:
            return <AudioArticle article={article}></AudioArticle>

        case EntryType.FORMAT_GALLERY:
            return <GalleryArticle article={article}></GalleryArticle>

        case EntryType.FORMAT_VIDEO:
            return <VideoArticle article={article}></VideoArticle>

        case EntryType.FORMAT_LINK:
            return <LinkArticle article={article}></LinkArticle>

        case EntryType.FORMAT_QUOTE:
            return <QuoteArticle article={article}></QuoteArticle>

        case EntryType.FORMAT_STANDARD:
        default:

            return <StandardArticle article={article} ></StandardArticle>
    }
}

export default Article