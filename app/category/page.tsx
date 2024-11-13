import PostSlider from '@/app/components/PostSlider'
import { postImages } from '@/app/models/ImageData'
import Image from 'next/image'
import React from 'react'

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

                        <div className="grid-sizer"></div>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/diagonal-building.jpg" alt="building" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Design</a>
                                            <a href="#">Photography</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/ferris-wheel.jpg" alt="ferris wheel" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Design</a>
                                            <a href="#">UI</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">This Is Another Standard Format Post.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-audio animate-this">

                            <div className="entry-thumb">
                                <a href="single-audio.html" className="thumb-link">
                                    <Image src="/images/thumbs/concert.jpg" alt="concert" width={400} height={400}/>
                                </a>

                                <div className="audio-wrap">
                                    <audio id="player" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls></audio>
                                </div>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Design</a>
                                            <a href="#">Music</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-quote animate-this">

                            <div className="entry-thumb">
                                <blockquote>
                                    <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>

                                    <cite>Dieter Rams</cite>
                                </blockquote>
                            </div>

                        </article>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/shutterbug.jpg" alt="Shutterbug" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Photography</a>
                                            <a href="#">html</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">Photography Skills Can Improve Your Graphic Design.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/usaf-rocket.jpg" alt="USAF rocket" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Branding</a>
                                            <a href="#">Mockup</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">The 10 Golden Rules of Clean Simple Design.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-gallery group animate-this">

                            <div className="entry-thumb">

                            <PostSlider images={postImages}></PostSlider>

                                
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Branding</a>
                                            <a href="#">Wordpress</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-gallery.html">Workspace Design Trends and Ideas.</a></h1>

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
                                        <a target="_blank" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</a>
                                    </cite>
                                </div>
                            </div>

                        </article>


                        <article className="brick entry animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/diagonal-pattern.jpg" alt="Pattern" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Design</a>
                                            <a href="#">UI</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">You Can See Patterns Everywhere.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-video animate-this">

                            <div className="entry-thumb video-image">
                                <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                                    <Image src="/images/thumbs/ottawa-bokeh.jpg" alt="bokeh" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Design</a>
                                            <a href="#">Branding</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-video.html">This Is a Video Post Format.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/lighthouse.jpg" alt="Lighthouse" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Photography</a>
                                            <a href="#">Design</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">Breathtaking Photos of Lighthouses.</a></h1>

                                </div>
                                <div className="entry-excerpt">
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                </div>
                            </div>

                        </article>

                        <article className="brick entry format-standard animate-this">

                            <div className="entry-thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <Image src="/images/thumbs/liberty.jpg" alt="Liberty" width={400} height={400}/>
                                </a>
                            </div>

                            <div className="entry-text">
                                <div className="entry-header">

                                    <div className="entry-meta">
                                        <span className="cat-links">
                                            <a href="#">Branding</a>
                                            <a href="#">html</a>
                                        </span>
                                    </div>

                                    <h1 className="entry-title"><a href="single-standard.html">Designing With Black and White.</a></h1>

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
                        <a href="#" className="page-numbers">2</a>
                        <a href="#" className="page-numbers">3</a>
                        <a href="#" className="page-numbers">4</a>
                        <a href="#" className="page-numbers">5</a>
                        <a href="#" className="page-numbers">6</a>
                        <a href="#" className="page-numbers">7</a>
                        <a href="#" className="page-numbers">8</a>
                        <a href="#" className="page-numbers">9</a>
                        <a href="#" className="page-numbers next">Next</a>
                    </nav>

                </div>

            </section>
{/* 
            <div id="preloader">
                <div id="loader"></div>
            </div> */}

        </>
    )
}

export default Category