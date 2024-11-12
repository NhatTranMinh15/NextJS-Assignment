import { UserComment } from "./User"

export type Comment = {
    id: string;
    blog: string;
    user: UserComment;
    content: string;
    createdAt: Date;
    reply: Comment[] | null;
}

export const comments: Comment[] = [
    {
        id: "1",
        blog: "single-standard",
        user: {
            name: "Alice Johnson",
            profileLink: "https://picsum.photos/200"
        },
        content: "This is a great post! Thanks for sharing.",
        createdAt: new Date("2024-11-01T10:00:00Z"),
        reply: [
            {
                id: "3",
                blog: "single-standard",
                user: {
                    name: "Bob Smith",
                    profileLink: "https://picsum.photos/200"
                },
                content: "I agree with Alice. Very informative.",
                createdAt: new Date("2024-11-01T11:00:00Z"),
                reply: []
            }
        ]
    },
    {
        id: "2",
        blog: "single-standard",
        user: {
            name: "Charlie Brown",
            profileLink: "https://picsum.photos/200"
        },
        content: "I have a question about the topic discussed.",
        createdAt: new Date("2024-11-02T09:30:00Z"),
        reply: [
            {
                id: "4",
                blog: "single-standard",
                user: {
                    name: "Alice Johnson",
                    profileLink: "https://picsum.photos/200"
                },
                content: "Sure, what would you like to know?",
                createdAt: new Date("2024-11-02T10:00:00Z"),
                reply: []
            }
        ]
    }
];