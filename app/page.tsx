import ImageSlider from "./components/ImageSlider";
import { featuredImages } from "@/app/lib/ImageData"
import Article from "./components/article/Article";
import { fetchArticle } from "./api/article/articles";
import Pagination from "./components/Pagination";

export default async function Home(props: { searchParams?: Promise<{ search?: string; page?: string; }>; }) {
  const searchParams = await props.searchParams;  

  const search = searchParams?.search || '';  
  
  const tempPage = Number(searchParams?.page) || 1;
  const currentPage = tempPage > 0 ? tempPage : 1;
  
  const articles = await fetchArticle({ page: currentPage, size: 5, sort: "", search })

  const { content, currentPage: page, totalElements, totalPage } = articles;
  
  return (
    <>
      <section id="bricks">

        <div className="row masonry">

          <div className="bricks-wrapper">

            <div className="brick entry featured-grid animate-this">
              <div className="entry-content">
                <ImageSlider images={featuredImages}></ImageSlider>
              </div>
            </div>

            {
              content.map(a => {
                return <Article article={a}></Article>
              })
            }

          </div>

        </div>

        <div className="row">

          <Pagination totalPages={totalPage} currentPage={currentPage} ></Pagination>

        </div>

      </section>
    </>

  );
}
