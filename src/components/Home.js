import React, { useEffect } from "react";
import Deal from "./Deal";

export default function Home ({dealList, homepage}) {

    let list;
    useEffect(() => {
        // console.log(dealList + "useEffect in Home");
        // homepage()

        // if (dealList != null) {
            
        // }

    }, [
        list = dealList.map((deal) => {
            return <Deal key={deal.dealID} deal={deal} dealList={dealList}/>
        })
    ])



    console.log(dealList + "home");
    
    return (
        <div>
            <h1>Home</h1>
            {list}
        </div>
    )
}