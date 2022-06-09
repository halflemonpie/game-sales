import axios from "axios";
import React, { useEffect,useState } from "react";
import {Routes, Route, Link, Navigate} from 'react-router-dom'

export default function Deal ({deal, savings, id, slides, setSlides}) {
    const [games, setGames] = useState()

    

    
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${id}`)
       .then((response) => {
        //  console.log(response.data[id].data);
         setGames(response.data[id].data);
         slides.push(response.data[id].data)
       })
       .catch((error) => {
         console.log(error);
       });
     }, [])

    
     let detail;
     if (games) {
         const short_description = games.short_description
         const header_image = games.header_image
         detail = (
            <div>
            <p>{short_description}</p>
            <img src={header_image} className='card-img-bottom' />
            </div>
         )
          } else {
         detail = <p>loading</p>
     }


    return (
        
            <div className="card bg-dark" >
                <div className="card-body">
                <h5 className="card-title fw-bold" >{deal.title}</h5>
                <p className="card-text"><s>{deal.normalPrice}</s></p>
                <p className="card-text">Savings:{savings}%</p>
                <p className="card-text">Price:{deal.salePrice}</p>
                </div>
                {detail}
                
            </div>
    
    )
}