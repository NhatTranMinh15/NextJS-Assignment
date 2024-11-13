import { comments } from "../../lib/data";

export async function fetchComment(blogSlug: string) {
    const comment = comments.filter((c) => {
        return c.blog == blogSlug;
    })
    await new Promise((resolve) => setTimeout(resolve, 10));
    return comment;
}