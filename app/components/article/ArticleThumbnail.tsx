import { TImage } from '@/app/models/General';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostSlider from '../PostSlider';

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


export const ArticleThumbnailFull = ({ linkHref, imageAlt, imageSrc, imageHeight, imageWidth, imageClass, imageStyle, linkClass, linkStyle }: PropsFull) => {
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

type Props = {
    linkHref: string;
    thumb: TImage;
    thumbStyle?: string;
    linkStyle?: string;
    imageStyle?: string;
}

export const StandardThumbnail = ({ linkHref, thumb, thumbStyle, linkStyle }: Props) => {
    return (
        <div className={"entry-thumb "+ thumbStyle}>
            {
                <Link href={linkHref} className={"thumb-link " + linkStyle} >
                    <Image src={thumb.src} alt={thumb.alt} width={400} height={400} />
                </Link>
            }
        </div>
    )
}

type GalleryProps = {
    postImages: TImage[]
}

export const GalleryThumbnail = ({ postImages }: GalleryProps) => {
    return (
        <div className="entry-thumb">
            <PostSlider images={postImages}></PostSlider>
        </div>
    )
}
type AudioProps = Props & {
    audio: string
}
export const AudioThumbnail = ({ audio, linkHref, thumb }: AudioProps) => {
    return (
        <div className="entry-thumb">
            {
                <Link href={linkHref} className={"thumb-link"}>
                    <Image src={thumb.src} alt={thumb.alt} width={400} height={400} />
                </Link>
            }
            <div className="audio-wrap z-[1]">
                <audio id="player" src={audio} controls className="w-full"></audio>
            </div>
        </div>
    )
}
