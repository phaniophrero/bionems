import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ProductDetailsCarousel = (props) => {
  const { allProducts } = props;
  const [wWidth, setWWidth] = useState();
  typeof window === "object" &&
    window.addEventListener("resize", () => setWWidth(window.innerWidth));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: wWidth < 900 ? 1 : 3,
    speed: 6,
  });

  useEffect(() => {}, [emblaApi]);

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
              <p>{product.price} e</p>
            </div>
          ))}
        </div>

        <div className="embla__prev" onClick={scrollPrev}>
          <div className="image">
            <Image
              src="/assets/slider/left.svg"
              alt="arrow-left"
              layout="fill"
            />
          </div>
        </div>
        <div className="embla__next" onClick={scrollNext}>
          <Image
            src="/assets/slider/right.svg"
            alt="arrow-left"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCarousel;
