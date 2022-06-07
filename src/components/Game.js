import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Routes, Route, Link, Navigate} from 'react-router-dom'

export default function Game () {
    const [current, setCurrent] = useState({})
    let param = useParams().game;
    console.log(param);

    useEffect(() => {
        axios.get(`https://www.cheapshark.com/api/1.0/games?id=${param}`)
        .then((res) => {
            console.log(res.data);
            setCurrent(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])




    return(
        <div>
            <p>game section</p>
            {/* {(current === {}) ? <h1>loading</h1> : <h1>{current.info.title}</h1>} */}
        </div>
      
    )
}