export type PageableModel = {
    page: number;
    size: number;
    sort: string;
}

export type SearchPageableModel = {
    search: string;
    page: number;
    size: number;
    sort: string;
}

export type Page<T> = {
    content: T[];
    totalPage: number;
    currentPage: number;
    totalElements: number;
}
export const emptyPage: Page<any> = {
    content: [],
    currentPage: 1,
    totalElements: 0,
    totalPage: 0
}