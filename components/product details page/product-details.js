import React from 'react'
import ProductDetailsReviews from './product details reviews/product-details-reviews'
import ProductDetailsCarousel from './product-details-carousel'
import ProductDetailsPresentation from './product-details-presentation'

const ProductDetails = (props) => {
    const { product, allProducts } = props

    return (
        <div className='product-details'>
            <ProductDetailsPresentation product = { product } />
            <ProductDetailsCarousel allProducts = { allProducts } />
            <ProductDetailsReviews />
        </div>
    )
}

export default ProductDetails
