import React from "react";
import ProductDetailsReviews from "./product details reviews/product-details-reviews";
import ProductDetailsCarousel from "./product-details-carousel";
import ProductDetailsPresentation from "./product-details-presentation";
import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";

const DUMMY_COMMENTS = [
  {
    username: "Cristiano Ronaldo",
    rating: 5,
    date: "10.12.1997",
    title: "Parerea mea despre produs este....",
    description:
      "Am o parere foarte buna despre produs, altceva nu stiu ce sa spun.",
  },

  {
    username: "Lionel Messi",
    rating: 5,
    date: "10.12.1997",
    title: "Parerea mea despre produs este....",
    description:
      "Am o parere foarte buna despre produs, altceva nu stiu ce sa spun.",
  },

  {
    username: "Romero Lukaku",
    rating: 5,
    date: "10.12.1997",
    title: "Parerea mea despre produs este....",
    description:
      "Am o parere foarte buna despre produs, altceva nu stiu ce sa spun.",
  },

  {
    username: "Lewandosky",
    rating: 5,
    date: "10.12.1997",
    title: "Parerea mea despre produs este....",
    description:
      "Am o parere foarte buna despre produs, altceva nu stiu ce sa spun.",
  },
];

const ProductDetails = (props) => {
  const { product, allProducts } = props;
  const commentsData = DUMMY_COMMENTS;

  return (
    <div className="product-details">
      <div className="go--back-wrapper">
        <Link href="/">
          <a className="go--back">
            <span className="go--back-icon">
              <IoIosArrowDropleft />
            </span>
            Precedent
          </a>
        </Link>
      </div>
      <ProductDetailsPresentation
        product={product}
        commentsData={commentsData}
      />
      <ProductDetailsCarousel allProducts={allProducts} />
      <ProductDetailsReviews commentsData={commentsData} />
    </div>
  );
};

export default ProductDetails;
