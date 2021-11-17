import React, { useState } from "react";
import ProductDetailsReviewsComments from "./product-details-reviews-comments";
import ProductDetailsReviewsForm from "./product-details-reviews-form";
import ProductDetailsReviewsStatistics from "./product-details-reviews-statistics";

const ProductDetailsReviews = (props) => {
  const [addReview, setAddReview] = useState(false);
  const addReviewHandler = () => setAddReview((prev) => setAddReview(!prev));
  const { commentsData } = props

  return (
    <div className="product-details-reviews">
      <div className="add-review--btn" onClick={addReviewHandler}>
        Creeaza un review
      </div>

      {addReview && <ProductDetailsReviewsForm />}
      <ProductDetailsReviewsStatistics />
      <ProductDetailsReviewsComments commentsData={commentsData} />
    </div>
  );
};

export default ProductDetailsReviews;
