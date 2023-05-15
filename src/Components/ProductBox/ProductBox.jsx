import React from 'react'
import MainButton from '../MainButton/MainButton'

import "./ProductBox.css"

export default function ProductBox({ title, src, alt, text}) {
  return (
    <div className="product-box">
      <img src={`/public/images/${src}`} alt={alt} className="product-box__banner" />
      <h3 className="product-box__title">{title}</h3>
      <p className="product-box__description">
       {text}
      </p>
      <div className="product-box__link">
        <MainButton size="1x" text="TRY IT NOW" />
      </div>
    </div>
  )
}
