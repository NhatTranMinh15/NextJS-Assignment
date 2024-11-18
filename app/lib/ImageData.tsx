import { StaticImageData } from "next/image";
import featuredImage1 from "@/public/images/thumbs/featured/featured-1.jpg";
import featuredImage2 from "@/public/images/thumbs/featured/featured-2.jpg";
import featuredImage3 from "@/public/images/thumbs/featured/featured-3.jpg";
import work1 from "@/public/images/thumbs/gallery/work1.jpg";
import work2 from "@/public/images/thumbs/gallery/work2.jpg";
import work3 from "@/public/images/thumbs/gallery/work3.jpg";
import gallery1 from "@/public/images/thumbs/single/gallery/single-gallery-01.jpg";
import gallery2 from "@/public/images/thumbs/single/gallery/single-gallery-02.jpg";
import gallery3 from "@/public/images/thumbs/single/gallery/single-gallery-03.jpg";
import sliderImage1 from "@/public/images/thumbs/gallery/work1.jpg";
import sliderImage2 from "@/public/images/thumbs/gallery/work2.jpg";
import sliderImage3 from "@/public/images/thumbs/gallery/work3.jpg";
import { TImage } from "../models/General";

export const featuredImages: TImage[] = [
  {
    id: "0",
    image: featuredImage1,
    meta: ["August 27, 2016", "Naruto Uzumaki"],
    alt: "Music Album Cover Designs for Inspiration",
    src: ""
  },
  {
    id: "1",
    image: featuredImage2,
    meta: ["September 06, 2016", "Naruto Uzumaki"],
    alt: "Minimalism Never Goes Out of Style",
    src: ""
  },
  {
    id: "2",
    image: featuredImage3,
    meta: ["August 29", "2016 Sasuke Uchiha"],
    alt: "Enhancing Your Designs with Negative Space",
    src: ""
  },
];

export const postImages: TImage[] = [
  {
    id: "0",
    image: work1,
    meta: [],
    alt: "",
    src: ""
  },
  {
    id: "1",
    image: work2,
    meta: [""],
    alt: "",
    src: ""
  },
  {
    id: "2",
    image: work3,
    meta: [""],
    alt: "",
    src: ""
  },
];

export const galleryImages: TImage[] = [
  {
    id: "0",
    image: gallery1,
    meta: [],
    alt: "",
    src: ""
  },
  {
    id: "1",
    image: gallery2,
    meta: [""],
    alt: "",
    src: ""
  },
  {
    id: "2",
    image: gallery3,
    meta: [""],
    alt: "",
    src: ""
  },
];



export const sliderImages: TImage[] = [
  {
    id: "0",
    image: sliderImage1,
    meta: [],
    alt: "",
    src: ""
  },
  {
    id: "1",
    image: sliderImage2,
    meta: [],
    alt: "",
    src: ""
  },
  {
    id: "2",
    image: sliderImage3,
    meta: [],
    alt: "",
    src: ""
  },
];