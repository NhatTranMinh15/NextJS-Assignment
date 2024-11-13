import Image from "next/image";
import { Blog, BlogType } from "../models/Blog";
import { Comment } from "../models/Comment";
import { User, UserCredential } from "../models/User";
import { Contact } from "../models/Contact";


export const userCredentials: UserCredential[] = [
    {
        email: "admin",
        password: "admin",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM"
    },
    {
        email: "admin@gmail.com",
        password: "admin",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM"
    },
    {
        email: "john.doe@example.com",
        password: "johnsPassword123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.uCgwqI_RT59gdeMkMxJ9SpuMlsy7qconJNjYjr0RXEY"
    },
    {
        email: "jane.smith@example.com",
        password: "janesPassword456",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImphbmUuc21pdGhAZXhhbXBsZS5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.VGIzo1gdrJsgm-0V5c09OAwl056yXWo6YRhHfCykJvc"
    },
    {
        email: "alice.jones@example.com",
        password: "alicePassword789",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFsaWNlLmpvbmVzQGV4YW1wbGUuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.JahwX4ZCVG8ayDeha5W2qGotALuEuWIe2Y7GUu0Sz5M"
    },
    {
        email: "bob.brown@example.com",
        password: "bobsPassword101",
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImJvYi5icm93bkBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.cEC4FNIu7zCsDfJylyAZlM66O12O4yz813FndTfg0dk'
    },
    {
        email: "charlie.davis@example.com",
        password: "charliesPassword202",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNoYXJsaWUuZGF2aXNAZXhhbXBsZS5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.NUptPIxfePLbzpUlLbYbQ0pcjIwZgfCdvVwC0aMqPLk"
    },
]

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
    {
        id: "single-audio",
        type: BlogType.FORMAT_AUDIO,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is an Audio Format Post.",
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
    {
        id: "single-gallery",
        type: BlogType.FORMAT_GALLERY,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is a Gallery Format Post.",
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
    {
        id: "single-video",
        type: BlogType.FORMAT_VIDEO,
        thumbnail: {
            src: "/images/thumbs/single/single-01.jpg",
            alt: ""
        },
        title: "Hey, This Is A Video Format Post.",
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

export const comments: Comment[] = [
    {
        id: "1",
        blog: "single-standard",
        user: {
            name: "Alice Johnson",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "This is a great post! Thanks for sharing.",
        createdAt: new Date("2024-11-01T10:00:00Z"),
        reply: [
            {
                id: "3",
                blog: "single-standard",
                user: {
                    name: "Bob Smith",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "I agree with Alice. Very informative.",
                createdAt: new Date("2024-11-01T11:00:00Z"),
                reply: [
                    {
                        id: "5",
                        blog: "single-standard",
                        user: {
                            name: "Alice Johnson",
                            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                        },
                        content: "Thanks you",
                        createdAt: new Date("2024-11-02T10:00:00Z"),
                        reply: [

                        ]
                    },
                    {
                        id: "3",
                        blog: "single-standard",
                        user: {
                            name: "Alan Smith",
                            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                        },
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
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I have a question about the topic discussed.",
        createdAt: new Date("2024-11-02T09:30:00Z"),
        reply: [
            {
                id: "4",
                blog: "single-standard",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-02T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "sadhiwjcnwdcmn",
        blog: "single-audio",
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I have a question about the audio content.",
        createdAt: new Date("2024-11-02T09:30:00Z"),
        reply: [
            {
                id: "4",
                blog: "single-audio",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-02T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "voivemevnrokdcws",
        blog: "single-video",
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I have a question about the video content.",
        createdAt: new Date("2024-11-03T09:30:00Z"),
        reply: [
            {
                id: "5",
                blog: "single-video",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-03T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "doewimwovkfieuf",
        blog: "single-gallery",
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I have a question about the gallery content.",
        createdAt: new Date("2024-11-04T09:30:00Z"),
        reply: [
            {
                id: "6",
                blog: "single-gallery",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-04T10:00:00Z"),
                reply: []
            }
        ]
    },

    {
        id: "doewimwovkfieuf",
        blog: "single-gallery",
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I have a question about the gallery content.",
        createdAt: new Date("2024-11-04T09:30:00Z"),
        reply: [
            {
                id: "6",
                blog: "single-gallery",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-04T10:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "abc123",
        blog: "single-audio",
        user: {
            name: "Emily Davis",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "Can you provide more details about the audio content?",
        createdAt: new Date("2024-11-05T08:15:00Z"),
        reply: [
            {
                id: "def456",
                blog: "single-audio",
                user: {
                    name: "John Doe",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Sure, what specifically would you like to know?",
                createdAt: new Date("2024-11-05T09:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "ghi789",
        blog: "single-video",
        user: {
            name: "Michael Scott",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "I found the video content very interesting!",
        createdAt: new Date("2024-11-06T07:45:00Z"),
        reply: [
            {
                id: "jkl012",
                blog: "single-video",
                user: {
                    name: "Pam Beesly",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "I'm glad you enjoyed it! Do you have any questions?",
                createdAt: new Date("2024-11-06T08:30:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "mno345",
        blog: "single-standard",
        user: {
            name: "Dwight Schrute",
            profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
        },
        content: "This standard blog post was very informative.",
        createdAt: new Date("2024-11-07T06:30:00Z"),
        reply: [
            {
                id: "pqr678",
                blog: "single-standard",
                user: {
                    name: "Jim Halpert",
                    profileLink: "https://picsum.photos/seed/" + Math.random() + "/200"
                },
                content: "Thanks, Dwight! Do you have any follow-up questions?",
                createdAt: new Date("2024-11-07T07:00:00Z"),
                reply: []
            }
        ]
    }
];

export const contacts: Contact[] = [
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        website: "https://alice.com",
        message: "Hello, this is Alice!",
        by: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        }
    },
    {
        name: "Bob Brown",
        email: "bob@example.com",
        website: "https://bob.com",
        message: "Hi, I am Bob.",
        by: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        }
    },
    {
        name: "Charlie Davis",
        email: "charlie@example.com",
        website: "https://charlie.com",
        message: "Hey, this is Charlie!",
        by: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        }
    },
    {
        name: "Diana Evans",
        email: "diana@example.com",
        website: "https://diana.com",
        message: "Hello, Diana here.",
        by: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        }
    },
    {
        name: "Eve Foster",
        email: "eve@example.com",
        website: "https://eve.com",
        message: "Hi, I'm Eve.",
        by: {
            name: "Jonathan Smith",
            profileLink: "",
            about: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            socialLinks: [
                { name: "Facebook", link: "" },
                { name: "Twitter", link: "" },
                { name: "GooglePlus", link: "" },
                { name: "Instagram", link: "" }
            ],
        }
    }
];