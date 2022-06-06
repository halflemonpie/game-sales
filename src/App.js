import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [dealList, setDealList] = useState()
console.log("app outside useEffect");


  useEffect(() => {
    console.log("useEffect in App");
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://www.cheapshark.com/api/1.0/deals',
      headers: { }
    };
    axios(config)
    .then((response) => {
      console.log(response.data + "useEffect in App");
      setDealList(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  const homepage = () => {
    
  }



  return (
    <div className="App">
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <Routes>
        <Route path='/' element={<Home homepage={homepage} setDealList={setDealList} dealList={dealList} />} />
      </Routes>

    </div>
  );
}

export default App;
