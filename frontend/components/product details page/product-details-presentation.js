import React from "react";
import Image from "next/image";

const ProductDetailsPresentation = (props) => {
  const { product } = props;

  return (
    <div className="product-details--presentation">
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

        <div className="ingredients">some ingredients</div>

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
