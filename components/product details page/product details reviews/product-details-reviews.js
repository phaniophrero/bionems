import React from 'react'
import ProductDetailsReviewsComments from './product-details-reviews-comments'
import ProductDetailsReviewsForm from './product-details-reviews-form'
import ProductDetailsReviewsStatistics from './product-details-reviews-statistics'

const ProductDetailsReviews = () => {
    return (
        <div className='product-details-reviews'>
            <h1>RECENZII</h1>
            <ProductDetailsReviewsForm />
            <ProductDetailsReviewsStatistics />
            <ProductDetailsReviewsComments />
        </div>
    )
}

export default ProductDetailsReviews
