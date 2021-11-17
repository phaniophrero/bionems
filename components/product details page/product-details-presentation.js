import React from "react";
import Image from "next/image";
import ProductDetailsReviewsComments from "./product details reviews/product-details-reviews-comments";

const ProductDetailsPresentation = (props) => {
  const { product, commentsData } = props;

  return (
    <div className="product-details--presentation">
      <div className="top">
        <div className="image-container">
          <div className="image">
            <Image src={product.image} alt="image" layout="fill" />
          </div>
        </div>

        <div className="details">
          <div className="title">
            <h1>{product.name}</h1>
            <h2>ESSAYEZ MAINTENANT</h2>
          </div>

          <ul className="ingredients">
            {product.ingredients.map((ingr, index) => (
              <li key={index}>
                <div className="image"></div>
                <p>{ingr.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bottom">
        <div className="mini-comments">
          <ProductDetailsReviewsComments commentsData={commentsData} />
          {/* <div className="overlay"></div> */}
        </div>

        <div className="description">
          <div className="title">
            <h1>DESCRIPTION</h1>
            <div className="line" />
          </div>

          <div className="text">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPresentation;
