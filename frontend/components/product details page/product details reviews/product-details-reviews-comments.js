import React from 'react'
import RatingResult from './rating-result'

const ProductDetailsReviewsComments = (props) => {
    const { commentsData, com } = props

    return (
        <div className='product-details-reviews-comments'>
            {commentsData.map((comments, index) => (
                <div className="card" key = { index }>
                    <div className="name"><h1>{comments.username}</h1></div>
                    <div className="rating-date">
                        <RatingResult />
                        <p>{comments.date}</p>
                    </div>
                    <div className="title">
                        <p>{comments.title}</p>
                    </div>
                    <div className="description">
                        <p>{comments.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductDetailsReviewsComments
