import React from "react";

export default function Deal ({deal}) {
    return (
        <div>
            <h1>{deal.title}</h1>
            <strike>{deal.normalPrice}</strike>
            <p>{deal.salePrice}</p>
            <p>{deal.savings}%</p>
            <img src={deal.thumb} />
            <p>{deal.storeID}</p>
        </div>
    )
}