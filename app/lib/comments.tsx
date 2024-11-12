import { comments } from "@/models/Comment";

export async function fetchComment(blogSlug: string) {
    const comment = comments.filter((c) => {
        return c.blog == blogSlug;
    })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return comment;
}