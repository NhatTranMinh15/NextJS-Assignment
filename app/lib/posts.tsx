import { blogPosts } from "@/models/Blog";

export async function fetchPost(id: string) {
    const post = blogPosts.find((b) => {
        return b.id == id;
    })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return post;
}