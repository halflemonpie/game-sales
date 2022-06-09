import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Routes, Route, Link, Navigate} from 'react-router-dom'

export default function Game () {
    let param = useParams().game;
    const [current, setCurrent] = useState()


    const cheapSharkCall = () => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${param}`)
        .then((res) => {
            console.log(res.data);
            setCurrent(res.data);

        })
        
        .catch((err) => {
            console.log(err);
        });

    }

                
    
    

    useEffect(() => {
        cheapSharkCall()
        }, [])

        let list;
        if (current) {
            list = current.deals.map((deal) => {
                
                return (
                    <li className="list-group-item-action list-group-item-primary" key={deal.dealID}>
                        <p>store:{deal.storeID}</p>
                        <p>Savings: -{Math.floor(deal.savings)}%</p>
                        <p><del>${deal.retailPrice}</del></p>
                        <p>price: ${deal.price}</p>
                        <p>savings:{deal.savings}</p>
    
                    </li>
                )
            })
        } else {
            list = <h1>loading</h1>
        }
        
        




    return(
        <div>
             {current ? <h1 className=" text-center">{current.info.title}</h1> : <h1>loading</h1>} 
             {current ? <img className="text-center" src={current.info.thumb} /> : <h1>loading</h1>} 
             {current ? <p>History Low: {current.cheapestPriceEver.price}</p> : <h1>loading</h1>}
             {current ? <a href={`https://store.steampowered.com/app/${current.info.steamAppID}`} target="_blank">Link to steam page</a> : <h1>loading</h1>}

             <ul className="list-group text-center">

             {list}
             </ul>

             
             
            
        </div>
      
    )
}