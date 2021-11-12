import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "embla-carousel";
import Image from "next/image";

const ProductDetailsCarousel = (props) => {
  const { allProducts } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 3,
    speed: 6,
  });

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="product-details-carousel">
      <div className="embla-details" ref={emblaRef}>
        <div className="embla__container-details">
          {allProducts.map((product, index) => (
            <div className="embla__slide-details" key={index}>
              <div className="image">
                <Image src={product.image} layout="fill" alt="product" />
              </div>

              <h1>{product.name}</h1>
            </div>
          ))}
        </div>

        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
