import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "../../config";

const ProductDetailsCarousel = (props) => {
  const { allProducts } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [nrSlides, setNrSlides] = useState(3);

  isMounted &&
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setNrSlides(1);
      } else {
        setNrSlides(3);
      }
    });

  // console.log(nrSlides)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: nrSlides,
    speed: 6,
  });

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth < 900) {
      setNrSlides(1);
    } else {
      setNrSlides(3);
    }

    return () => setIsMounted(false);
  }, []);

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
            <Link href={product.slug} key={index}>
              <a className="embla__slide-link">
                <div className="embla__slide-details">
                  <div className="image">
                    <Image
                      src={API_URL + product.image}
                      layout="fill"
                      alt="product"
                    />
                  </div>

                  <h1>{product.name}</h1>
                  <p>{product.price} €</p>
                </div>
              </a>
            </Link>
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
