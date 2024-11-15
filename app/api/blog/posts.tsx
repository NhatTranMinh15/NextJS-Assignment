import { blogPosts } from '@/app/lib/data';
import { notFound } from 'next/navigation'

export async function fetchPost(slug: string) {
    const blog = blogPosts.find((b) => {
        return b.slug == slug;
    })
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (!blog) {
        notFound()
    }
    return blog;
}