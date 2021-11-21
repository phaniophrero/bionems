import React, { useState } from "react";
import Image from "next/image";

const DUMMY_STARS = [
  {
    empty: "/assets/products-details/star-empty.svg",
    full: "/assets/products-details/star-full.svg",
    value: 1,
  },

  {
    empty: "/assets/products-details/star-empty.svg",
    full: "/assets/products-details/star-full.svg",
    value: 2,
  },

  {
    empty: "/assets/products-details/star-empty.svg",
    full: "/assets/products-details/star-full.svg",
    value: 3,
  },

  {
    empty: "/assets/products-details/star-empty.svg",
    full: "/assets/products-details/star-full.svg",
    value: 4,
  },

  {
    empty: "/assets/products-details/star-empty.svg",
    full: "/assets/products-details/star-full.svg",
    value: 5,
  },
];

const RatingStars = () => {
  const [tracking, setTracking] = useState(0);
  const [value, setValue] = useState(0)
  console.log(value)

  return (
    <div className="rating-stars-wrapper">
      {DUMMY_STARS.map((star, index) => (
        <div
          className="star-image"
          key={index}
          onMouseLeave={() => setTracking(0)}
          onMouseEnter={() => setTracking(star.value)}

        >
          {star.value <= tracking || star.value <= value ? (
            <Image src='/assets/product-details/star-fill.svg' layout="fill"
              onClick={() => setValue(star.value)}
            />
          ) : (
            <Image src='/assets/product-details/star-empty.svg' layout="fill"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
