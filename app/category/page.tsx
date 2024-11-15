import PostSlider from '@/app/components/PostSlider'
import { postImages } from '@/app/lib/ImageData'
import Image from 'next/image'
import React from 'react'
import Pagination from '../components/Pagination'
import { articles } from '../lib/data'
import Article from '../components/article/Article'

type Props = {}

const Category = (props: Props) => {
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
                            articles.map(a => {
                                return <Article article={a}></Article>
                            })
                        }
                    </div>

                </div>

                <div className="row">

                    {/* <Pagination></Pagination> */}
                </div>

            </section>

        </>
    )
}

export default Category