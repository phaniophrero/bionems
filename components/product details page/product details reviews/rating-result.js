import React, { Fragment, useState } from "react";
import Image from "next/image";

const DUMMY_STARS = [
  {
    fill: "/assets/product-details/star-fill.svg",
    empty: "/assets/product-details/star-empty.svg",
  },

  {
    fill: "/assets/product-details/star-fill.svg",
    empty: "/assets/product-details/star-empty.svg",
  },

  {
    fill: "/assets/product-details/star-fill.svg",
    empty: "/assets/product-details/star-empty.svg",
  },

  {
    fill: "/assets/product-details/star-fill.svg",
    empty: "/assets/product-details/star-empty.svg",
  },

  {
    fill: "/assets/product-details/star-fill.svg",
    empty: "/assets/product-details/star-empty.svg",
  },
];

const RatingResult = () => {
  const [resultValue, setResultValue] = useState(5);

  return (
    <div className="rating-result">
      {DUMMY_STARS.map((star, index) => (
        <Fragment key={index}>
          {index <= resultValue ? (
            <div className="image">
              <Image src={star.fill} alt="" layout="fill" />
            </div>
          ) : (
            <div className="image">
              <Image src={star.empty} alt="" layout="fill" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default RatingResult;
