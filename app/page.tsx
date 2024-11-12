'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import PostSlider from "../components/PostSlider";
import { featuredImages, postImages } from "@/models/ImageData"

export default function Home() {
  useEffect(() => {

  }, [])
  return (
    <>
      <section id="bricks">

        <div className="row masonry">

          <div className="bricks-wrapper">

            <div className="grid-sizer"></div>

            <div className="brick entry featured-grid animate-this">
              <div className="entry-content">
                <ImageSlider images={featuredImages}></ImageSlider>
              </div>
            </div>

            <article className="brick entry format-standard animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/diagonal-building.jpg" alt="building" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Design</Link>
                      <Link href="/#">Photography</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">Just Link Standard Format Post.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-standard animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/ferris-wheel.jpg" alt="ferris wheel" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Design</Link>
                      <Link href="/#">UI</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">This Is Another Standard Format Post.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-audio animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-audio" className="thumb-link">
                  <Image src="/images/thumbs/concert.jpg" alt="concert" width={400} height={400} />
                </Link>

                <div className="audio-wrap z-[1]">
                  <audio id="player" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls className="w-full"></audio>
                </div>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Design</Link>
                      <Link href="/#">Music</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-audio">This Is Link Audio Format Post.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-quote animate-this" >

              <div className="entry-thumb">
                <blockquote>
                  <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>

                  <cite>Dieter Rams</cite>
                </blockquote>
              </div>

            </article>

            <article className="brick entry animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/shutterbug.jpg" alt="Shutterbug" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Photography</Link>
                      <Link href="/#">html</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">Photography Skills Can Improve Your Graphic Design.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry animate-this" >

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/usaf-rocket.jpg" alt="USAF rocket" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Branding</Link>
                      <Link href="/#">Mockup</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">The 10 Golden Rules of Clean Simple Design.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-gallery animate-this">

              <div className="entry-thumb">
                <PostSlider images={postImages}></PostSlider>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Branding</Link>
                      <Link href="/#">Wordpress</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-gallery">Workspace Design Trends and Ideas.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-link animate-this">

              <div className="entry-thumb">
                <div className="link-wrap">
                  <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                  <cite>
                    <Link target="_blank" href="/http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</Link>
                  </cite>
                </div>
              </div>

            </article>

            <article className="brick entry animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/diagonal-pattern.jpg" alt="Pattern" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Design</Link>
                      <Link href="/#">UI</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">You Can See Patterns Everywhere.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry format-video animate-this">

              <div className="entry-thumb video-image">
                <Link href="/http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                  <Image src="/images/thumbs/ottawa-bokeh.jpg" alt="bokeh" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Design</Link>
                      <Link href="/#">Branding</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-video">This Is Link Video Post Format.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/lighthouse.jpg" alt="Lighthouse" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Photography</Link>
                      <Link href="/#">Design</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">Breathtaking Photos of Lighthouses.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

            <article className="brick entry animate-this">

              <div className="entry-thumb">
                <Link href="/blog/single-standard" className="thumb-link">
                  <Image src="/images/thumbs/liberty.jpg" alt="Liberty" width={400} height={400} />
                </Link>
              </div>

              <div className="entry-text">
                <div className="entry-header">

                  <div className="entry-meta">
                    <span className="cat-links">
                      <Link href="/#">Branding</Link>
                      <Link href="/#">html</Link>
                    </span>
                  </div>

                  <h1 className="entry-title"><Link href="/blog/single-standard">Designing With Black and White.</Link></h1>

                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>

            </article>

          </div>

        </div>

        <div className="row">

          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <Link href="/#" className="page-numbers">2</Link>
            <Link href="/#" className="page-numbers">3</Link>
            <Link href="/#" className="page-numbers">4</Link>
            <Link href="/#" className="page-numbers">5</Link>
            <Link href="/#" className="page-numbers">6</Link>
            <Link href="/#" className="page-numbers">7</Link>
            <Link href="/#" className="page-numbers">8</Link>
            <Link href="/#" className="page-numbers">9</Link>
            <Link href="/#" className="page-numbers next">Next</Link>
          </nav>

        </div>

      </section>





      {/* <div id="preloader">
        <div id="loader"></div>
      </div> */}

    </>

  );
}
