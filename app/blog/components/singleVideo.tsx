import { Blog } from '@/app/models/Blog';
import { Comment } from '@/app/models/Comment';
import Image from 'next/image'
import React, { ReactNode } from 'react'
import CommentList from './comment';
import BlogMetadata from './metadata';
import AuthorProfile from './authorProfile';
import PageNavigation from './PageNavigation';

type Props = {
    blog: Blog;
    comments: Comment[];
}

const SingleVideo = ({ blog, comments }: Props) => {
    return (
        <section id="content-wrap" className="blog-single">
            <div className="row">
                <div className="col-twelve">
                    <article className="format-video">
                        <div className="content-media h-[512px]">
                            <iframe src="https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen className='w-full h-full'></iframe>
                        </div>
                        <div className="primary-content">
                            <h1 className="page-title">{blog.title}</h1>
                            <BlogMetadata metatdata={blog.metatdata}></BlogMetadata>
                            <p className="lead">{blog.lead}</p>
                            {
                                blog.content.map(c => {
                                    if (!c) return "";
                                    if (typeof c == "string") {
                                        return <p>{c as string}</p>
                                    }
                                    else {
                                        return c as ReactNode;
                                    }
                                })
                            }
                            <p className="tags">
                                <span>Tagged in :</span>
                                {blog.tags.map(t => {
                                    return <a href={t.link}>{t.name}</a>
                                })}
                            </p>
                            <AuthorProfile author={blog.author} />
                        </div>
                        <PageNavigation></PageNavigation>
                    </article>
                </div>
            </div >
            <CommentList comments={comments} ></CommentList>
        </section >
    )
}

export default SingleVideo