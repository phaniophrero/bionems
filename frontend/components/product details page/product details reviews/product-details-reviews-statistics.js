import React from 'react'
import RatingResult from './rating-result'

const ProductDetailsReviewsStatistics = () => {
    return (
        <div className='product-details-reviews-statistics'>
            <div className="rating">
                <h1>4.80</h1>
                <RatingResult />
                <p>442 Recenzii</p>
            </div>

            <div className="tabel">
                <div className="line">
                    <p>5 stele</p>
                    <div className="fill-container">
                        <div className='fill' style={{background: '#3fce61', width: '80%'}} />
                    </div>
                    <p>80,80%</p>
                    <p>1411</p>
                </div>

                <div className="line">
                    <p>4 stele</p>
                    <div className="fill-container">
                        <div className='fill' style={{background: '#a6d594', width: '60%'}} />
                    </div>
                    <p>35,5</p>
                    <p>21</p>
                </div>

                <div className="line">
                    <p>3 stele</p>
                    <div className="fill-container">
                        <div className='fill' style={{background: '#b2b95c', width: '40%'}} />
                    </div>
                    <p>10%</p>
                    <p>6</p>
                </div>

                <div className="line">
                    <p>2 stele</p>
                    <div className="fill-container">
                        <div className='fill' style={{background: '#d9b155', width: '20%'}} />
                    </div>
                    <p>2%</p>
                    <p>3</p>
                </div>

                <div className="line">
                    <p>1 stele</p>
                    <div className="fill-container">
                        <div className='fill' style={{background: '#cc8a51', width: '10%'}} />
                    </div>
                    <p>1%</p>
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsReviewsStatistics
