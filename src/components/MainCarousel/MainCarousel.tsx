import { useState, useEffect, useRef } from "react";
import "./MainCarouselStyle";
import { MainCarouselStyle } from "./MainCarouselStyle";
import { motion } from "framer-motion";
import imageCarousel1 from "../../assets/img/image.svg";
import imageCarousel2 from "../../assets/img/image(1).svg";

const images = [imageCarousel1, imageCarousel2];

export function MainCarousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <MainCarouselStyle>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div className="inner" drag="x">
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Slider images" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </MainCarouselStyle>
  );
}
