import React from "react";
import Input from "../../ui/input";
import RatingStars from "./rating-stars";

const ProductDetailsReviewsForm = () => {
  return (
    <form className="product-details-reviews-form">
      <div className="rating-stars">
        <p>Note Generale</p>
        <RatingStars />
      </div>

      <Input
        wrapperCN="review-input username"
        label="Username"
        type="text"
        placeholder="type your username.."
      />
      <Input
        wrapperCN="review-input email"
        label="Email"
        type="text"
        placeholder="type your email.."
      />
      <Input
        wrapperCN="review-input title"
        label="Title"
        type="text"
        placeholder="create a title.."
      />
      <Input wrapperCN="review-textarea" label="Description" isTextarea={true} placeholder = 'write your review..' />

      <div className="submit">
          <button>Envoyer</button>
      </div>
    </form>
  );
};

export default ProductDetailsReviewsForm;
