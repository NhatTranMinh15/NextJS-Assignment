import { Blog } from '@/app/models/Blog';
import { Comment } from '@/app/models/Comment';
import Image from 'next/image'
import React, { ReactNode } from 'react'
import CommentList from './comment';
import CommentForm from '@/app/components/CommentForm';
import BlogMetadata from './metadata';
import AuthorProfile from './authorProfile';
import PageNavigation from './PageNavigation';

type Props = {
    blog: Blog;
    comments: Comment[];
}

const SingleAudio = ({ blog, comments }: Props) => {
    return (
        <section id="content-wrap" className="blog-single">
            <div className="row">
                <div className="col-twelve">

                    <article className="format-audio">

                        <div className="content-media">
                            <div className="post-thumb">
                                <Image src="/images/thumbs/single/single-02.jpg" alt={''} width={0} height={0} sizes="100vw" className='w-full h-auto' />
                            </div>
                            <div className="audio-wrap">
                                <audio id="player2" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls className='w-full rounded-none'></audio>
                            </div>
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

        </section >)
}

export default SingleAudio