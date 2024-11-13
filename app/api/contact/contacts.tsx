import { blogPosts, contacts } from '@/app/lib/data';
import { Contact } from '@/app/models/Contact';
import { PageableModel, Page, emptyPage } from '@/app/models/General';
import { notFound } from 'next/navigation'

export async function fetchContact(pageable: PageableModel): Promise<Page<Contact>> {
    const { page, size } = pageable;
    const skip = page * size;
    if (skip > contacts.length || size <= 0 || page < 0) {
        return await new Promise((resolve) => setTimeout(() => { resolve(emptyPage); }, 1000));
    }
    const take = (skip + size > contacts.length) ? contacts.length - skip : size;

    await new Promise((resolve) => setTimeout(resolve, 10));
    const result = contacts.slice(skip, take);
    return {
        content: result,
        currentPage: skip / size,
        totalElements: contacts.length,
        totalPage: contacts.length / take
    }
}
