import { StaticImageData } from "next/image";
import featuredImage1 from "@/public/images/thumbs/featured/featured-1.jpg";
import featuredImage2 from "@/public/images/thumbs/featured/featured-2.jpg";
import featuredImage3 from "@/public/images/thumbs/featured/featured-3.jpg";
import work1 from "@/public/images/thumbs/gallery/work1.jpg";
import work2 from "@/public/images/thumbs/gallery/work2.jpg";
import work3 from "@/public/images/thumbs/gallery/work3.jpg";
import sliderImage1 from "@/public/images/thumbs/gallery/work1.jpg";
import sliderImage2 from "@/public/images/thumbs/gallery/work2.jpg";
import sliderImage3 from "@/public/images/thumbs/gallery/work3.jpg";
import { TImage } from "../models/General";

export const featuredImages: TImage[] = [
  {
    id: "0",
    src: featuredImage1,
    meta: ["August 27, 2016", "Naruto Uzumaki"],
    alt: "Music Album Cover Designs for Inspiration",
  },
  {
    id: "1",
    src: featuredImage2,
    meta: ["September 06, 2016", "Naruto Uzumaki"],
    alt: "Minimalism Never Goes Out of Style",
  },
  {
    id: "2",
    src: featuredImage3,
    meta: ["August 29", "2016 Sasuke Uchiha"],
    alt: "Enhancing Your Designs with Negative Space",
  },
];

export const postImages: TImage[] = [
  {
    id: "0",
    src: work1,
    meta: [],
    alt: ""
  },
  {
    id: "1",
    src: work2,
    meta: [""],
    alt: ""
  },
  {
    id: "2",
    src: work3,
    meta: [""],
    alt: ""
  },
];

export const sliderImages: TImage[] = [
  {
    id: "0",
    src: sliderImage1,
    meta: [],
    alt: ""
  },
  {
    id: "1",
    src: sliderImage2,
    meta: [],
    alt: ""
  },
  {
    id: "2",
    src: sliderImage3,
    meta: [],
    alt: ""
  },
];