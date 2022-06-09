import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Deal from "./Deal";

export default function SearchResult () {
    const param = useParams().title
    // console.log(param);
    const [resultList, setResultList] = useState()
    const [resultPage, setResultPage] = useState(0)

    useEffect(() => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&&pageSize=10&title=${param}&pageNumber=${resultPage}`)
        .then((response) => {
          console.log(response.data);
          setResultList(response.data)
        })
        .catch((error) => {
          console.log(error);
        }); 
    }, [param, resultPage])

    let list = [];
    if (resultList) {
        for (let i = 0; i < resultList.length; i++) {
            list.push(resultList[i]);
        }
    }
    
        let listDisplay;
        listDisplay = list.map((deal) => {
            return (
                <Link className="col-6 text-decoration-none mb-3" key={deal.steamAppID} to={`/games/${deal.gameID}`}>
                <Deal deal={deal} savings={Math.floor(deal.savings)} id={deal.steamAppID}/>
                </Link>
            )
        })


    return (
        <div>
                <h1 className="text-center">Result Page</h1>
                <button onClick={() => {setResultPage(resultPage - 1)}} className="btn btn-primary">Previous</button>
               <button onClick={() => {setResultPage(resultPage + 1)}} className="btn btn-primary">Next</button>
               <div className="row">
                {listDisplay}
                
               </div>
               <button onClick={() => {setResultPage(resultPage + 1)}} className="btn btn-primary">Previous</button>
               <button onClick={() => {setResultPage(resultPage - 1)}} className="btn btn-primary">Next</button>
            </div>
    )
}