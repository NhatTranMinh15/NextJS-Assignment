import { articles, getRandomElement, users } from "@/app/lib/data";
import { Article } from "@/app/models/Blog";
import { Contact } from "@/app/models/Contact";
import { emptyPage, Page, PageableModel } from "@/app/models/General";
import { randomUUID } from "crypto";

export async function fetchArticle(pageable: PageableModel): Promise<Page<Article>> {
    let { page, size } = pageable;
    page = page - 1
    const skip = page * size;
    if (skip > articles.length || size <= 0 || page < 0) {
        return await new Promise((resolve) => setTimeout(() => { resolve(emptyPage); }, 1000));
    }
    const take = (skip + size > articles.length) ? articles.length - skip : size;
    const result = articles.slice(skip, skip + take);
    return {
        content: result,
        currentPage: parseInt((skip / size).toString()),
        totalElements: articles.length,
        totalPage: parseInt((articles.length / size).toString()) + 1
    }
}