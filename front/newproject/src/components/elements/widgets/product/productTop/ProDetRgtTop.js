import { Fragment,useState } from "react";
import React, { Component } from 'react';

import Rating from '../../../ui/Rating';

export default function ProDetRgtTop({productId, productName, detail ,unitPrice}) {

    return (
        <Fragment>
            <h2>{productName}</h2>
            <div className="product-details-price">
                <span>{unitPrice}원</span>
            </div>
            {/* <div className="pro-details-rating-wrap">
                {rating && rating > 0 ? (
                    <Rating ratingValue={rating} />
                ) : ( "" )
                }
            </div> */}
            <div className="pro-details-list">
                <p>{detail}</p>
            </div>
        </Fragment>
    );
}