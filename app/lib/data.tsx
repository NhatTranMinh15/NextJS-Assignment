import Image from "next/image";
import { Blog, BlogType, Article, EntryType } from "../models/Blog";
import { Comment } from "../models/Comment";
import { User, UserComment } from "../models/User";
import { Contact } from "../models/Contact";
import PostSlider from "../components/PostSlider";
import { postImages } from "./ImageData";

export const users: User[] = [
    {
        name: "Admin",
        username: "admin",
        email: "admin@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Admin",
        socialLinks: [],
        password: "admin",
        isAdmin: true
    },
    {
        name: "Jonathan Smith",
        email: "johnathansmith@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "GooglePlus", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "eveePassword202",
        // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJvYi5icm93bkBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.cEC4FNIu7zCsDfJylyAZlM66O12O4yz813FndTfg0dk',
        username: "johnathansmith",
        isAdmin: false
    },
    {
        name: "Emily Johnson",
        email: "emilyjohnson@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Emily is a passionate software developer with over 5 years of experience in full-stack development. She loves creating intuitive and dynamic user experiences and is always eager to learn new technologies.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "LinkedIn", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "emilyPassword123",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImVtaWx5LmpvaG5zb25AZXhhbXBsZS5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.4Z5G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "emilyjohnson",
        isAdmin: false
    },
    {
        name: "Michael Brown",
        email: "michaelbrown@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Michael is a seasoned project manager who excels in leading cross-functional teams to deliver high-quality projects on time and within budget. His expertise lies in agile methodologies and effective communication.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "GitHub", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "michaelPassword456",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1pY2hhZWwuYnJvd25AZXhhbXBsZS5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.5Z6G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "michaelbrown",
        isAdmin: false
    },
    {
        name: "Sophia Williams",
        email: "sophiawilliams@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Sophia is a creative graphic designer with a keen eye for detail and a passion for visual storytelling. She has worked with various brands to create compelling designs that resonate with their audiences.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "Pinterest", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "sophiaPassword789",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNvcGhpYS53aWxsaWFtc0BleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.6Z7G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "",
        isAdmin: false
    }
    , {
        name: "David Lee",
        email: "davidlee@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "David is a data scientist with a knack for uncovering insights from complex datasets. He enjoys working on machine learning projects and is passionate about using data to drive decision-making.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "LinkedIn", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "davidPassword101",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRhdmlkLmxlZUBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.7Z8G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "davidlee",
        isAdmin: false
    },
    {
        name: "Olivia Martinez",
        email: "oliviamartinez@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "Olivia is a marketing specialist with a talent for creating engaging content and executing successful campaigns. She has a deep understanding of digital marketing trends and loves connecting brands with their audiences.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "LinkedIn", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "oliviaPassword202",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im9saXZpYS5tYXJ0aW5lekBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.8Z9G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "oliviamartinez",
        isAdmin: false
    },
    {
        name: "James Wilson",
        email: "jameswilson@gmail.com",
        profileLink: "https://picsum.photos/seed/" + Math.random() + "/200",
        about: "James is a cybersecurity expert dedicated to protecting organizations from digital threats. With extensive experience in network security and ethical hacking, he helps businesses safeguard their data.",
        socialLinks: [
            { name: "Facebook", link: "" },
            { name: "Twitter", link: "" },
            { name: "LinkedIn", link: "" },
            { name: "Instagram", link: "" }
        ],

        password: "jamesPassword303",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImphbWVzLndpbHNvbkBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.9Z0G8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M",
        username: "jameswilson",
        isAdmin: false
    }

];

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
        slug: "single-standard",
        metatdata: {
            date: new Date("2016-09-06"),
            categories: [
                { link: "", name: "Wordpress" },
                { link: "", name: "Design" }
            ]
        },
        lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
        content: content,
        tags: [
            { link: "", name: "orci" },
            { link: "", name: "lectus" },
            { link: "", name: "varius" },
            { link: "", name: "turpis" }
        ],
        author: users[1],
    },
    {
        id: "single-audio",
        type: BlogType.FORMAT_AUDIO,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is an Audio Format Post.",
        slug: "single-audio",
        metatdata: {
            date: new Date("2016-09-06"),
            categories: [
                { link: "", name: "Wordpress" },
                { link: "", name: "Design" }
            ]
        },
        lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
        content: content,
        tags: [
            { link: "", name: "orci" },
            { link: "", name: "lectus" },
            { link: "", name: "varius" },
            { link: "", name: "turpis" }
        ],
        author: users[2],
    },
    {
        id: "single-gallery",
        type: BlogType.FORMAT_GALLERY,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is a Gallery Format Post.",
        slug: "single-gallery",
        metatdata: {
            date: new Date("2016-09-06"),
            categories: [
                { link: "", name: "Wordpress" },
                { link: "", name: "Design" }
            ]
        },
        lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
        content: content,
        tags: [
            { link: "", name: "orci" },
            { link: "", name: "lectus" },
            { link: "", name: "varius" },
            { link: "", name: "turpis" }
        ],
        author: users[2],
    },
    {
        id: "single-video",
        type: BlogType.FORMAT_VIDEO,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is A Video Format Post.",
        slug: "single-video",
        metatdata: {
            date: new Date("2016-09-06"),
            categories: [
                { link: "", name: "Wordpress" },
                { link: "", name: "Design" }
            ]
        },
        lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
        content: content,
        tags: [
            { link: "", name: "orci" },
            { link: "", name: "lectus" },
            { link: "", name: "varius" },
            { link: "", name: "turpis" }
        ],
        author: users[3],
    },
];

const userComments: UserComment[] = users.map(u => { return { name: u.name, profileLink: u.profileLink } });


export const comments: Comment[] = [
    {
        id: "1",
        blog: "single-standard",
        user: getRandomElement(userComments),
        content: "This is a great post! Thanks for sharing.",
        createdAt: new Date("2024-11-01T10:00:00Z"),
        reply: [
            {
                id: "3",
                blog: "single-standard",
                user: getRandomElement(userComments),
                content: "I agree with Alice. Very informative.",
                createdAt: new Date("2024-11-01T11:00:00Z"),
                reply: [
                    {
                        id: "5",
                        blog: "single-standard",
                        user: getRandomElement(userComments),
                        content: "Thanks you",
                        createdAt: new Date("2024-11-02T10:00:00Z"),
                        reply: [

                        ]
                    },
                    {
                        id: "3",
                        blog: "single-standard",
                        user: getRandomElement(userComments),
                        content: "So do I.",
                        createdAt: new Date("2024-11-03T11:00:00Z"),
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        blog: "single-standard",
        user: getRandomElement(userComments),
        content: "I have a question about the topic discussed.",
        createdAt: new Date("2024-11-02T09:30:00Z"),
        reply: [
            {
                id: "4",
                blog: "single-standard",
                user: getRandomElement(userComments),
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-02T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "sadhiwjcnwdcmn",
        blog: "single-audio",
        user: getRandomElement(userComments),
        content: "I have a question about the audio content.",
        createdAt: new Date("2024-11-02T09:30:00Z"),
        reply: [
            {
                id: "4",
                blog: "single-audio",
                user: getRandomElement(userComments),
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-02T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "voivemevnrokdcws",
        blog: "single-video",
        user: getRandomElement(userComments),
        content: "I have a question about the video content.",
        createdAt: new Date("2024-11-03T09:30:00Z"),
        reply: [
            {
                id: "5",
                blog: "single-video",
                user: getRandomElement(userComments),
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-03T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "doewimwovkfieuf",
        blog: "single-gallery",
        user: getRandomElement(userComments),
        content: "I have a question about the gallery content.",
        createdAt: new Date("2024-11-04T09:30:00Z"),
        reply: [
            {
                id: "6",
                blog: "single-gallery",
                user: getRandomElement(userComments),
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-04T10:00:00Z"),
                reply: []
            }
        ]
    },

    {
        id: "doewimwovkfieuf",
        blog: "single-gallery",
        user: getRandomElement(userComments),
        content: "I have a question about the gallery content.",
        createdAt: new Date("2024-11-04T09:30:00Z"),
        reply: [
            {
                id: "6",
                blog: "single-gallery",
                user: getRandomElement(userComments),
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-04T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "abc123",
        blog: "single-audio",
        user: getRandomElement(userComments),
        content: "Can you provide more details about the audio content?",
        createdAt: new Date("2024-11-05T08:15:00Z"),
        reply: [
            {
                id: "def456",
                blog: "single-audio",
                user: getRandomElement(userComments),
                content: "Sure, what specifically would you like to know?",
                createdAt: new Date("2024-11-05T09:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "ghi789",
        blog: "single-video",
        user: getRandomElement(userComments),
        content: "I found the video content very interesting!",
        createdAt: new Date("2024-11-06T07:45:00Z"),
        reply: [
            {
                id: "jkl012",
                blog: "single-video",
                user: getRandomElement(userComments),
                content: "I'm glad you enjoyed it! Do you have any questions?",
                createdAt: new Date("2024-11-06T08:30:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "mno345",
        blog: "single-standard",
        user: getRandomElement(userComments),
        content: "This standard blog post was very informative.",
        createdAt: new Date("2024-11-07T06:30:00Z"),
        reply: [
            {
                id: "pqr678",
                blog: "single-standard",
                user: getRandomElement(userComments),
                content: "Thanks, Dwight! Do you have any follow-up questions?",
                createdAt: new Date("2024-11-07T07:00:00Z"),
                reply: []
            }
        ]
    }
];

export const articles: Article[] = [
    {
        thumbnail: {
            src: "/images/thumbs/diagonal-building.jpg",
            alt: "building"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "Just a Standard Format Post.",
        categories: [
            {
                link: "",
                name: "Design"
            },
            {
                link: "",
                name: "Photography"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/ferris-wheel.jpg",
            alt: "ferris wheel"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "This Is Another Standard Format Post.",
        categories: [
            {
                link: "",
                name: "Design"
            },
            {
                link: "",
                name: "UI"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/concert.jpg",
            alt: "concert"
        },
        slug: "single-audio",
        link: "/blog/single-audio",
        type: EntryType.FORMAT_AUDIO,
        audio: "/media/AirReview-Landmarks-02-ChasingCorporate.mp3",
        title: "This Is Link Audio Format Post.",
        categories: [
            {
                link: "",
                name: "Design"
            },
            {
                link: "",
                name: "Music"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "",
            alt: ""
        },
        slug: "single-quote",
        link: "",
        type: EntryType.FORMAT_QUOTE,
        quotes: [
            <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>,
            <cite>Dieter Rams</cite>
        ],
        title: "",
        categories: [],
    },
    {
        thumbnail: {
            src: "/images/thumbs/shutterbug.jpg",
            alt: "Shutterbug"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "Photography Skills Can Improve Your Graphic Design.",
        categories: [
            {
                link: "",
                name: "Photography"
            },
            {
                link: "",
                name: "html"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/usaf-rocket.jpg",
            alt: "USAF rocket"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "The 10 Golden Rules of Clean Simple Design.",
        categories: [
            {
                link: "",
                name: "Branding"
            },
            {
                link: "",
                name: "Mockup"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/diagonal-building.jpg",
            alt: "building"
        },
        slug: "single-gallery",
        link: "/blog/single-gallery",
        type: EntryType.FORMAT_GALLERY,
        slider: postImages,
        title: "Workspace Design Trends and Ideas.",
        categories: [
            {
                link: "",
                name: "Branding"
            },
            {
                link: "",
                name: "Wordpress"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/diagonal-building.jpg",
            alt: "building"
        },
        slug: "single-link",
        link: "http://www.dreamhost.com",
        type: EntryType.FORMAT_LINK,
        title: "Looking for affordable & reliable web hosting? We recommend Dreamhost.",
        categories: [],
        excerpt: ""
    },
    {
        thumbnail: {
            src: "/images/thumbs/diagonal-pattern.jpg",
            alt: "Pattern"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "You Can See Patterns Everywhere.",
        categories: [
            {
                link: "",
                name: "Design"
            },
            {
                link: "",
                name: "UI"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/ottawa-bokeh.jpg",
            alt: "bokeh"
        },
        slug: "single-video",
        link: "/blog/single-video",
        type: EntryType.FORMAT_VIDEO,
        video: "http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39",

        title: "This Is Link Video Post Format.",
        categories: [
            {
                link: "",
                name: "Design"
            },
            {
                link: "",
                name: "Branding"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/lighthouse.jpg",
            alt: "Lighthouse"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "Breathtaking Photos of Lighthouses.",
        categories: [
            {
                link: "",
                name: "Photography"
            },
            {
                link: "",
                name: "Design"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
    {
        thumbnail: {
            src: "/images/thumbs/liberty.jpg",
            alt: "Liberty"
        },
        slug: "single-standard",
        link: "/blog/single-standard",
        type: EntryType.FORMAT_STANDARD,
        title: "Designing With Black and White.",
        categories: [
            {
                link: "",
                name: "Branding"
            },
            {
                link: "",
                name: "html"
            }
        ],
        excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim."
    },
]



export function getRandomElement(arr: any[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


