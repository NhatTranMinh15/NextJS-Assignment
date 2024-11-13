import { fetchComment } from "@/app/api/comment/comments";
import { BlogType } from "@/app/models/Blog";
import SingleAudio from "../components/singleAudio";
import SingleStandard from "../components/singleStandard"
import SingleGallery from "../components/singleGallery";
import SingleVideo from "../components/singleVideo";
import { fetchPost } from "@/app/api/blog/posts";
type Props = { params: Promise<{ slug: string }> }

const Page = async ({ params, }: Props) => {
  const slug = (await params).slug
  const blog = await fetchPost(slug);
  const comments = await fetchComment(slug);

  const blogType = blog.type;
  switch (blogType) {
    case BlogType.FORMAT_AUDIO:
      return <SingleAudio blog={blog} comments={comments} ></SingleAudio>
    case BlogType.FORMAT_GALLERY:
      return <SingleGallery blog={blog} comments={comments} ></SingleGallery>

    case BlogType.FORMAT_VIDEO:
      return <SingleVideo blog={blog} comments={comments} ></SingleVideo>

    default:

      return <SingleStandard blog={blog} comments={comments} ></SingleStandard>
  }
}

export default Page
