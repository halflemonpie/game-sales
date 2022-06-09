import React, { useEffect, useState } from "react";
import Deal from "./Deal";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import axios from "axios";


 function Home ({dealList, pageNumber, setPageNumber}) {
        let list = [];
        for (let i = 0; i < dealList.length; i++) {
            list.push(dealList[i]);
        }
        // console.log(list);
        let listDisplay;
        listDisplay = list.map((deal) => {
            return (
                <Link className="col-6 text-decoration-none mb-3" key={deal.steamAppID} to={`/games/${deal.gameID}`}>
                <Deal deal={deal} savings={Math.floor(deal.savings)} id={deal.steamAppID}/>
                </Link>
            )
        })
       
        // const handleLoad = () => {
        //     pageNumber ++
        //     axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=${pageNumber}&pageSize=10`)
        //     .then((response) => {
        //     // console.log(response.data);
        //     response.data.forEach((item) => {
        //         list.push(item)
        //     })
        //     })
        //      .catch((error) => {
        //     console.log(error);
        //     }); 
        //     console.log(list);
        //     listDisplay = list.map((deal) => {
        //         return (
        //             <Link className="col-6 text-decoration-none mb-3" key={deal.steamAppID} to={`/games/${deal.gameID}`}>
        //             <Deal deal={deal} savings={Math.floor(deal.savings)} id={deal.steamAppID}/>
        //             </Link>
        //         )
        //     })
        // }


        return (
            <div>
                <h1 className="text-center">Deals</h1>
                <button onClick={() => {setPageNumber(pageNumber - 1)}} className="btn btn-primary">Previous</button>
               <button onClick={() => {setPageNumber(pageNumber + 1)}} className="btn btn-primary">Next</button>
               <div className="row">
                {listDisplay}
                
               </div>
               {/* <button onClick={handleLoad} className="btn btn-primary">Load More</button> */}
               <button onClick={() => {setPageNumber(pageNumber - 1)}} className="btn btn-primary">Previous</button>
               <button onClick={() => {setPageNumber(pageNumber + 1)}} className="btn btn-primary">Next</button>
            </div>
        )

}

export default Home