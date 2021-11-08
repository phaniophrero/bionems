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
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide">
              {/* <div className="slideContent"></div> */}
              <div className="slide__text">
                <div className="slideContent__left">
                  <h1
                    className={`slide__title ${
                      slide.cNameTitle ? slide.cNameTitle : ""
                    }`}
                  >
                    {slide.title}
                    <span
                      className={`slide__subtitle ${
                        slide.cName ? slide.cName : ""
                      }`}
                    >
                      {slide.subtitle}
                    </span>
                  </h1>
                  <div className="slideMenu">
                    <div className={slide.cNameMenuList}>
                      <ul className="slideMenu__listItems">
                        <li>{slide.menuTitleItem1}</li>
                        <li>{slide.menuTitleItem2}</li>
                        <li>{slide.menuTitleItem3}</li>
                        {slide.id === "s2" && <li>{slide.menuTitleItem4}</li>}
                      </ul>
                    </div>
                    {slide.id === "s1" && (
                      <div className="slideMenu__list">
                        <ul className="slideMenu__listItems">
                          <li>Roulleau de printemps au poulet</li>
                          <li>Roulleau de printemps au vegetarien</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`slideImage ${slide.cNameImage}`}>
                <h2 className="slideImage__title">{slide.price}</h2>
                <h3 className="slideImage__title2">Bon prix</h3>
                <Image
                  src={slide.image}
                  width={425}
                  height={323}
                  alt="BioNems Menu Images Nems et Rouleaux"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sliderDots">
        {slides.map((dot, index) => (
          <DotButton
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default SliderHero;
