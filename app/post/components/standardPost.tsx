import { EntryThumb } from './entryThumb'
import EntryHeader from './entryHeader'

type Props = {
    linkHref: string;
    imageSrc: string;
    imageAlt: string;
    catLinks: Record<string, string>
    entryTitle: string;
    entryTitleLink: string;
    entryExcerpt: string;
}

const StandardPost = ({ catLinks, entryExcerpt, entryTitle, entryTitleLink, imageAlt, imageSrc, linkHref }: Props) => {
    return (
        <article className="brick entry format-standard animate-this">
            <EntryThumb linkHref={linkHref} imageSrc={imageSrc} imageAlt={imageAlt} ></EntryThumb>
            <div className="entry-text">
                <EntryHeader catLinks={catLinks} entryTitle={entryTitle} entryTitleLink={entryTitleLink}></EntryHeader>
                <div className="entry-excerpt">
                    {entryExcerpt}
                </div>
            </div>
        </article>
    )
}

export default StandardPost