import { metadata } from "@/app/layout";
import { fetchPost } from "@/app/lib/posts";
import { parseDate } from "@/models/Blog";
import Image from "next/image";
import { ReactElement, ReactNode } from "react";
import { string } from "zod";
type Props = {}

const SingleStandard = async (props: Props) => {
  const post = await fetchPost("single-standard");
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

            <h3>5 Comments</h3>


            <ol className="commentlist">

              <li className="depth-1">

                <div className="avatar">
                  <Image width="50" height="50" className="avatar" src="/images/avatars/user-01.jpg" alt="" />
                </div>

                <div className="comment-content">

                  <div className="comment-info">
                    <cite>Itachi Uchiha</cite>

                    <div className="comment-meta">
                      <time className="comment-time" dateTime="2014-07-12T23:05">Jul 12, 2014 @ 23:05</time>
                      <span className="sep">/</span><a className="reply" href="#">Reply</a>
                    </div>
                  </div>

                  <div className="comment-text">
                    <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                      facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                  </div>

                </div>

              </li>

              <li className="thread-alt depth-1">

                <div className="avatar">
                  <Image width="50" height="50" className="avatar" src="/images/avatars/user-04.jpg" alt="" />
                </div>

                <div className="comment-content">

                  <div className="comment-info">
                    <cite>John Doe</cite>

                    <div className="comment-meta">
                      <time className="comment-time" dateTime="2014-07-12T24:05">Jul 12, 2014 @ 24:05</time>
                      <span className="sep">/</span><a className="reply" href="#">Reply</a>
                    </div>
                  </div>

                  <div className="comment-text">
                    <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                      urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                      tantas semper delicatissimi.</p>
                  </div>

                </div>

                <ul className="children">

                  <li className="depth-2">

                    <div className="avatar">
                      <Image width="50" height="50" className="avatar" src="/images/avatars/user-03.jpg" alt="" />
                    </div>

                    <div className="comment-content">

                      <div className="comment-info">
                        <cite>Kakashi Hatake</cite>

                        <div className="comment-meta">
                          <time className="comment-time" dateTime="2014-07-12T25:05">Jul 12, 2014 @ 25:05</time>
                          <span className="sep">/</span><a className="reply" href="#">Reply</a>
                        </div>
                      </div>

                      <div className="comment-text">
                        <p>Duis sed odio sit amet nibh vulputate
                          cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                          cursus a sit amet mauris</p>
                      </div>

                    </div>

                    <ul className="children">

                      <li className="depth-3">

                        <div className="avatar">
                          <Image width="50" height="50" className="avatar" src="/images/avatars/user-04.jpg" alt="" />
                        </div>

                        <div className="comment-content">

                          <div className="comment-info">
                            <cite>John Doe</cite>

                            <div className="comment-meta">
                              <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                              <span className="sep">/</span><a className="reply" href="#">Reply</a>
                            </div>
                          </div>

                          <div className="comment-text">
                            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                              etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                          </div>

                        </div>

                      </li>

                    </ul>

                  </li>

                </ul>

              </li>

              <li className="depth-1">

                <div className="avatar">
                  <Image width="50" height="50" className="avatar" src="/images/avatars/user-02.jpg" alt="" />
                </div>

                <div className="comment-content">

                  <div className="comment-info">
                    <cite>Shikamaru Nara</cite>

                    <div className="comment-meta">
                      <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                      <span className="sep">/</span><a className="reply" href="#">Reply</a>
                    </div>
                  </div>

                  <div className="comment-text">
                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                  </div>

                </div>

              </li>

            </ol>


            <div className="respond">

              <h3>Leave a Comment</h3>

              <form name="contactForm" id="contactForm" method="post" action="">
                <fieldset>

                  <div className="form-field">
                    <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" defaultValue="" />
                  </div>

                  <div className="form-field">
                    <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" defaultValue="" />
                  </div>

                  <div className="form-field">
                    <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website" defaultValue="" />
                  </div>

                  <div className="message form-field">
                    <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
                  </div>

                  <button type="submit" className="submit button-primary">Submit</button>

                </fieldset>
              </form>

            </div>

          </div>
        </div>
      </div>

    </section >
  );
}
export default SingleStandard
