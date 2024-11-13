import Image from "next/image";
import { User } from "./User";

export enum PostType {
    FORMAT_STANDARD = "format-standard",
    FORMAT_AUDIO = "format-audio",
    FORMAT_QUOTE = "format-quote",
    FORMAT_GALLERY = "format-gallery",
    FORMAT_LINK = "format-link",
    FORMAT_VIDEO = "format-video",
}
export enum BlogType {
    FORMAT_STANDARD = "format-standard",
    FORMAT_AUDIO = "format-audio",
    FORMAT_GALLERY = "format-gallery",
    FORMAT_VIDEO = "format-video",
}
export type BlogMetadata = {
    date: Date;
    categories: {
        link: string;
        name: string;
    }[]
}

export type Blog = {
    id: string;
    type: BlogType;
    thumbnail: {
        src: string;
        alt: string;
    }
    title: string;
    metatdata: BlogMetadata;
    lead: string;
    content: (string | React.ReactNode)[];
    tags: {
        link: string;
        name: string;
    }[]
    author: User
}

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
};

export const parseDate = (date: Date) => {
    return date.toLocaleDateString('en-US', options);
}

