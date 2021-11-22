import React from "react";
import Image from "next/image";
import ProductDetailsReviewsComments from "./product details reviews/product-details-reviews-comments";
import { API_URL } from "../../config";

const ProductDetailsPresentation = (props) => {
  const { product, commentsData } = props;

  return (
    <div className="product-details--presentation">
      <div className="top">
        <div className="image-container">
          <div className="image">
            <Image src={API_URL + product.image} alt="image" layout="fill" />
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
                <div className="image">
                  <Image
                    src="/assets/product-details/check.svg"
                    alt="check"
                    layout="fill"
                  />
                </div>
                <p>{ingr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bottom">
        <div className="mini-comments">
          <div className="comment">
            <h3 className="comment-name">Jess Lock</h3>
            <ul className="comment-start"></ul>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dignissimos?
            </p>
          </div>
          <div className="go-to-comments--btn">Go to comments</div>
        </div>

        <div className="description-right">
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
