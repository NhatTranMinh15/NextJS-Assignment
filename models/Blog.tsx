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
export type Blog = {
    id: string;
    type: BlogType;
    thumbnail: {
        src: string;
        alt: string;
    }
    title: string;
    metatdata: {
        date: Date;
        categories: {
            link: string;
            name: string;
        }[]
    }
    lead: string;
    content: (string | React.ReactNode)[];
    contentLiteral: string;
    tags: {
        link: string;
        name: string;
    }[]
    author: User
}



const content: (string | React.ReactNode)[] = [
    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>,
    <p><Image src="/images/shutterbug.jpg" alt="" width={0} height={0} sizes="100vw" className='w-full h-auto' /></p>,
    <h2>Large Heading</h2>,
    <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>,
    <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>,
    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>,
    <h3>Smaller Heading</h3>,
    <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>,
    <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>,
    <pre><code>
        {
            `code {
font-size: 1.4rem;
margin: 0 .2rem;
padding: .2rem .6rem;
white-space: nowrap;
background: #F1F1F1;
border: 1px solid #E1E1E1;	
border-radius: 3px;
}`
        }
    </code></pre>,
    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>,

    <ul>
        <li>Donec nulla non metus auctor fringilla.
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </li>
        <li>Donec nulla non metus auctor fringilla.</li>
        <li>Donec nulla non metus auctor fringilla.</li>
    </ul>,
    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>,
]

export const blogPosts: Blog[] = [
    {
        id: "single-standard",
        type: BlogType.FORMAT_STANDARD,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is A Standard Format Post.",
        metatdata: {
            date: new Date("2016-09-06"),
            categories: [
                { link: "", name: "Wordpress" },
                { link: "", name: "Design" }
            ]
        },
        lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
        content: content,
        contentLiteral: `<p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                            </p>

                            <p><Image src="/images/shutterbug.jpg" alt="" width={0} height={0} sizes="100vw" className='w-full h-auto' /></p>

                            <h2>Large Heading</h2>

                            <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>

                            <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>

                            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>

                            <h3>Smaller Heading</h3>

                            <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

                            <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

                            <pre><code>
                                {
                                    \`code {
font-size: 1.4rem;
margin: 0 .2rem;
padding: .2rem .6rem;
white-space: nowrap;
background: #F1F1F1;
border: 1px solid #E1E1E1;	
border-radius: 3px;
}\`
                                }
                            </code></pre>

                            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                            <ul>
                                <li>Donec nulla non metus auctor fringilla.
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                    </ul>
                                </li>
                                <li>Donec nulla non metus auctor fringilla.</li>
                                <li>Donec nulla non metus auctor fringilla.</li>
                            </ul>

                            <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>
`,
        tags: [
            { link: "", name: "orci" },
            { link: "", name: "lectus" },
            { link: "", name: "varius" },
            { link: "", name: "turpis" }
        ],
        author: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        },
    },
];
const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
};

export const parseDate = (date: Date) => {
    return date.toLocaleDateString('en-US', options);
}

