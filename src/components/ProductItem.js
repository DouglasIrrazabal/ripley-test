import React from 'react'
import './ProductItem.css';

export const ProductItem = ({
    name,
    partNumber,
    fullImage,
    prices,
}) => {

    const {formattedCardPrice, formattedOfferPrice} = prices;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-7">
                    <img src={fullImage} alt={name} className="img-fluid"/>
                </div>
                <div className="col-sm-12 col-lg-5">
                    <div id="product-header">
                        <h1>{name}</h1>
                        <h5 className="text-muted">SKU: {partNumber}</h5>
                    </div>
                    <div id="product-prices">
                        <li className="font-weight-light">
                            <span id="methodOfPayment">Internet </span>
                            <span id="price">{formattedOfferPrice}</span>
                        </li>
                        <li className="font-weight-bold text-danger">
                            <span id="methodOfPayment">Tarjeta Ripley </span>
                            <span id="price">{formattedCardPrice}</span>
                        </li>
                        
                    </div>
                    <div id="buy-button">
                        <button className="p-3 mt-2 text-white">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
