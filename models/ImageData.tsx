import { StaticImageData } from "next/image";
import featuredImage1 from "@/public/images/thumbs/featured/featured-1.jpg";
import featuredImage2 from "@/public/images/thumbs/featured/featured-2.jpg";
import featuredImage3 from "@/public/images/thumbs/featured/featured-3.jpg";
import work1 from "@/public/images/thumbs/gallery/work1.jpg";
import work2 from "@/public/images/thumbs/gallery/work2.jpg";
import work3 from "@/public/images/thumbs/gallery/work3.jpg";
export interface ImageData {
  id: string;
  src: StaticImageData;
  meta: string[];
  title: string;
}

export const featuredImages: ImageData[] = [
  {
    id: "0",
    src: featuredImage1,
    meta: ["August 27, 2016", "Naruto Uzumaki"],
    title: "Music Album Cover Designs for Inspiration"
  },
  {
    id: "1",
    src: featuredImage2,
    meta: ["September 06, 2016", "Naruto Uzumaki"],
    title: "Minimalism Never Goes Out of Style"
  },
  {
    id: "2",
    src: featuredImage3,
    meta: ["August 29", "2016 Sasuke Uchiha"],
    title: "Enhancing Your Designs with Negative Space"
  },
];

export const postImages: ImageData[] = [
  {
    id: "0",
    src: work1,
    meta: [],
    title: ""
  },
  {
    id: "1",
    src: work2,
    meta: [""],
    title: ""
  },
  {
    id: "2",
    src: work3,
    meta: [""],
    title: ""
  },
];