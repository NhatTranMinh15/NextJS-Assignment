import React from 'react'
import Pagination from '../components/Pagination'
import Article from '../components/article/Article'
import { fetchArticle } from '../api/article/articles'

const Category = async (props: { searchParams?: Promise<{ search?: string; page?: string; }>; }) => {
    const searchParams = await props.searchParams;

    const search = searchParams?.search || '';

    const tempPage = Number(searchParams?.page) || 1;
    const currentPage = tempPage > 0 ? tempPage : 1;

    const articles = await fetchArticle({ page: currentPage, size: 5, sort: "", search })

    const { content, currentPage: page, totalElements, totalPage } = articles;
    return (
        <>
            <section id="page-header">
                <div className="row current-cat">
                    <div className="col-full">
                        <h1>Category: Photography</h1>
                    </div>
                </div>
            </section>

            <section id="bricks" className="with-top-sep">

                <div className="row masonry">

                    <div className="bricks-wrapper">
                        {
                            content.map(a => {
                                return <Article article={a}></Article>
                            })
                        }
                    </div>

                </div>

                <div className="row">

                    <Pagination totalPages={totalPage} currentPage={page} ></Pagination>
                </div>

            </section>

        </>
    )
}

export default Category