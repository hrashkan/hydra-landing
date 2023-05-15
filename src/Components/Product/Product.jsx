import React, { useEffect, useState } from 'react'
import { BsStarFill, BsStar, BsFillHeartFill } from "react-icons/bs"

import "./Product.css"

export default function Product({ product, src, href, title, desc, onWishList, onBuy }) {


    const [zoom, setZoom] = useState(1);
    const [inWishlist, setInWishlist] = useState(false)

    //zoom image func
    const handleMouseMove = (event) => {
        const zoomFactor = 2;
        const offsetX = event.nativeEvent.offsetX / event.target.offsetWidth;
        const offsetY = event.nativeEvent.offsetY / event.target.offsetHeight;
        const transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        event.target.style.transformOrigin = transformOrigin;
        event.target.style.transform = "scale(2)";
        setZoom(zoomFactor);
    };

    //un zoom image
    const handleMouseLeave = () => {
        event.target.style.transformOrigin = "center center";
        event.target.style.transform = "scale(1)";

        setZoom(1);
    };

    //click wish list
    const wishlistClickHandler = () => {
        onWishList(product);
        setInWishlist(true)
    }

    //add to cart
    const addToCartClickHandler = e => {
        e.preventDefault()
        onBuy(product)
    }



    return (
        <div className="product-box">
            <div className="product__cover">
                <img src={`/public/images/${src}`} alt="product" className="product__img" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
            </div>
            <div className={`product__wishlist ${inWishlist ? 'active' : ''}`}>
                <BsFillHeartFill onClick={wishlistClickHandler} />
            </div>
            <h3 className="product__title">{title}</h3>
            <p className="product__description">
                {desc}
            </p>
            <div className="product__score">
                <BsStarFill className='product__score-start' />
                <BsStarFill className='product__score-start' />
                <BsStarFill className='product__score-start' />
                <BsStarFill className='product__score-start' />
                <BsStar className='product__score-start' />
            </div>
            <div className="product__link">
                <a href={href} className='product__link-button' onClick={addToCartClickHandler}>
                    Add To Cart
                </a>
            </div>
        </div>
    )
}
