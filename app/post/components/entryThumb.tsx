import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropsFull = {
    linkHref: string;
    linkClass: string;
    linkStyle: React.CSSProperties;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    imageClass: string;
    imageStyle: React.CSSProperties;
}
type Props = {
    linkHref: string;
    imageSrc: string;
    imageAlt: string;
}

export const EntryThumbFull = ({ linkHref, imageAlt, imageSrc, imageHeight, imageWidth, imageClass, imageStyle, linkClass, linkStyle }: PropsFull) => {
    return (
        <div className="entry-thumb">
            {
                <Link href={linkHref} className={"thumb-link " + linkClass} style={{ ...linkStyle }}>
                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className={" " + (imageClass)} style={{ ...imageStyle }} />
                </Link>
            }
        </div>
    )
}

export const EntryThumb = ({ linkHref, imageAlt, imageSrc }: Props) => {
    return (
        <div className="entry-thumb">
            {
                <Link href={linkHref} className={"thumb-link"}>
                    <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
                </Link>
            }
        </div>
    )
}
