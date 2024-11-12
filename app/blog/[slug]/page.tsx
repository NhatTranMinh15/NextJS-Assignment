import { fetchComment } from "@/app/lib/comments";
import { fetchPost } from "@/app/lib/posts";
import { parseDate } from "@/models/Blog";
import Image from "next/image";
import { ReactNode } from "react";
import CommentList from "../components/comment";
import CommentForm from "@/components/CommentForm";

type Props = { params: Promise<{ slug: string }> }

const Page = async ({ params, }: Props) => {
  const slug = (await params).slug
  const post = await fetchPost(slug);
  const comments = await fetchComment(slug);

  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          {
            post ?
              <article className="format-standard">
                <div className="content-media">
                  <div className="post-thumb">
                    <Image src={post.thumbnail.src} alt={post.thumbnail.alt} width={0} height={0} sizes="100vw" className='w-full h-auto' />
                  </div>
                </div>

                <div className="primary-content">

                  <h1 className="page-title">{post.title}</h1>

                  <ul className="entry-meta">
                    <li className="date">
                      {parseDate(post.metatdata.date)}
                    </li>
                    <li className="cat">
                      {
                        post.metatdata.categories.map((c) => {
                          return <a href={c.link}>{c.name}</a>
                        })
                      }
                    </li>
                  </ul>

                  <p className="lead">{post.lead}</p>

                  {
                    post.content.map(c => {
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
                    {post.tags.map(t => {
                      return <a href={t.link}>{t.name}</a>
                    })}
                  </p>

                  <div className="author-profile">
                    <Image src="/images/avatars/user-05.jpg" alt="" width={400} height={400} />

                    <div className="about">
                      <h4><a href={post.author.profileLink}>{post.author.name}</a></h4>

                      <p>{post.author.about}</p>

                      <ul className="author-social">
                        {post.author.socialLinks.map(l => {
                          return <li><a href={l.link}>{l.name}</a></li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pagenav group">
                  <div className="prev-nav">
                    <a href="#" rel="prev">
                      <span>Previous</span>
                      Tips on Minimalist Design
                    </a>
                  </div>
                  <div className="next-nav">
                    <a href="#" rel="next">
                      <span>Next</span>
                      Less Is More
                    </a>
                  </div>
                </div>

              </article>
              :
              ""
          }
        </div>
      </div >

      <div className="comments-wrap">
        <div id="comments" className="row">
          <div className="col-full">
            <CommentList comments={comments} ></CommentList>
            <CommentForm></CommentForm>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Page
