import React from "react";
import {Routes, Route, Link, Navigate} from 'react-router-dom'

 
export default function Deal ({deal}) {
    return (
        
            <div>
                <p>{deal.title}</p>
                <strike>{deal.normalPrice}</strike>
                <p>{deal.salePrice}</p>
                <p>{deal.savings}%</p>
                <img src={deal.thumb} />
                <p>platform: {deal.storeID}</p>
                
            </div>
    
    )
}