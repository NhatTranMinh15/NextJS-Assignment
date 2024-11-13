import { blogPosts } from '@/app/lib/data';
import { notFound } from 'next/navigation'

export async function fetchPost(id: string) {
    const blog = blogPosts.find((b) => {
        return b.id == id;
    })
    await new Promise((resolve) => setTimeout(resolve, 10));
    if (!blog) {
        notFound()
    }
    return blog;
}