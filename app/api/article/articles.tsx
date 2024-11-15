import { articles } from "@/app/lib/data";
import { Article } from "@/app/models/Blog";
import { emptyPage, Page, SearchPageableModel } from "@/app/models/General";

export async function fetchArticle(searchPageable: SearchPageableModel): Promise<Page<Article>> {
    let { page, size, search, sort } = searchPageable;
    page = page - 1
    const skip = page * size;
    const at = articles.filter(a => { return a.title.toLowerCase().includes(search.toLowerCase()) });
    if (skip > at.length || size <= 0 || page < 0) {
        return await new Promise((resolve) => setTimeout(() => { resolve(emptyPage); }, 1000));
    }
    const take = (skip + size > at.length) ? at.length - skip : size;
    const result = at.slice(skip, skip + take);
    return {
        content: result,
        currentPage: parseInt((skip / size).toString()),
        totalElements: at.length,
        totalPage: parseInt((at.length / size).toString()) + 1
    }
}