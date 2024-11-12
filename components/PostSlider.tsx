"use client";
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/images/thumbs/gallery/work1.jpg";
import image2 from "@/public/images/thumbs/gallery/work2.jpg";
import image3 from "@/public/images/thumbs/gallery/work3.jpg";
interface ImageData {
    id: string;
    src: StaticImageData;
}
const images: ImageData[] = [
    {
        id: "0",
        src: image1,
    },
    {
        id: "1",
        src: image2,
    },
    {
        id: "2",
        src: image3,
    },
];
type Props = {
    images:ImageData[]
}

const PostSlider = ({images}: Props) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div className="relative w-full min-h-[400px] overflow-hidden cursor-pointer" onClick={nextSlide}>
            {
                images.map((image, id) => {
                    return <Image key={id} src={image.src} alt={image.id} fill  className={"w-auto image-slide " + (id == currentIndex ? "image-slide-visible" : "image-slide-invisible")} />
                })
            }
        </div>
    )
}

export default PostSlider