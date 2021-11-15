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
  console.log(tracking);

  return (
    <div className="rating-stars-wrapper">
      {DUMMY_STARS.map((star, index) => (
        <div
          className="star-image"
          key={index}
          onMouseLeave={() => setTracking(0)}
        >
          {star.value <= tracking ? (
            <p
              style={{ background: "yellow", width: "100%", height: "100%" }}
              onMouseEnter={() => {
                setTracking(star.value);
              }}
            >
              f
            </p>
          ) : (
            <p
              onMouseEnter={() => {
                setTracking(star.value);
              }}
            >
              e
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
