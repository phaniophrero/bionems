import { useEffect, useCallback, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import sliderHeroData from "../../data/sliderHeroData";
import Image from "next/image";
import leaf from "../../public/images/leaf-slider.svg";

const DotButton = ({ selected, onClick }) => (
  <button
    className={`dot ${selected ? "active" : ""}`}
    type="button"
    onClick={onClick}
  />
);

function SliderHero({ options = { loop: false } }) {
  const slides = sliderHeroData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useRef(
    Autoplay(
      { delay: 6000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <main name="accueil" className="hero-wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="description">
                <div className="main-title">
                  <div className="title">
                    <h1>{slide.title}</h1>
                  </div>

                  <div className="subtitle">
                    <h2>{slide.title}</h2>
                  </div>
                </div>

                <ul className="ingredients">
                  {slide.types.map((type, index) => (
                    <li key={index}>
                      <div className="point" />
                      <p key={index}>{type.name}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="image-container">
                <div className="image">
                  <Image src={slide.image} alt="image" layout="fill" />
                </div>

                <div className="price">
                  <h1>{slide.price}</h1>
                  <p>Bon Prix</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* //! DOTS */}
      <div className="sliderDots">
        {slides.map((dot, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}

export default SliderHero;
