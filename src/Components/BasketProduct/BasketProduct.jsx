import React, { useEffect } from 'react'
import { BsStarFill, BsStar } from "react-icons/bs"
import { Link } from 'react-router-dom'

import "./BasketProduct.css"

export default function BasketProduct({ product, title, src, count }) {

    useEffect(() => {
        console.log(product)
    }, [])

    return (
        <div className="basket-product-box">
            <div className="basket-product__cover">
                <img src={`/public/images/${src}`} alt="product" className="basket-product__img" />
            </div>
            <div className="basket-product__wishlist">
            </div>
            <h3 className="basket-product__title">
                title:
                <span className="basket-product__title-text">{title}</span>
            </h3>
            <div className="basket-product__score">
                score:
                <span className="basket-product__score-start">
                    <BsStarFill className='basket-product__score-start' />
                    <BsStarFill className='basket-product__score-start' />
                    <BsStarFill className='basket-product__score-start' />
                    <BsStarFill className='basket-product__score-start' />
                    <BsStar className='basket-product__score-start' />
                </span>

            </div>
            <div className="basket-product__count">
                count:
                <span className="basket-product__count-text">{count}</span>
            </div>
        </div>
    )
}
