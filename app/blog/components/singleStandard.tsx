
import Image from "next/image";
import { ReactNode } from "react";
import CommentList from "../components/comment";
import AuthorProfile from "../components/authorProfile";
import BlogMetadata from "../components/metadata";
import { Blog } from "@/app/models/Blog";
import { Comment } from '@/app/models/Comment';
import PageNavigation from "./PageNavigation";
import { randomInt, randomUUID } from "crypto";

type Props = {
    blog: Blog;
    comments: Comment[];
}

const SingleStandard = async ({ blog, comments }: Props) => {

    return blog &&
        <section id="content-wrap" className="blog-single">
            <div className="row">
                <div className="col-twelve">
                    <article className="format-standard">
                        <div className="content-media">
                            <div className="blog-thumb">
                                <Image src={blog.thumbnail.src} alt={blog.thumbnail.alt} width={0} height={0} sizes="100vw" className='w-full h-auto' />
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
                                    return <a key={"tags" + t + randomUUID()} href={t.link}>{t.name}</a>
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

}

export default SingleStandard
