import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';

function App() {
  const [dealList, setDealList] = useState([])
  console.log("app outside useEffect");


  useEffect(() => {
    // var axios = require('axios');
    // var config = {
    //   method: 'get',
    //   url: 'https://www.cheapshark.com/api/1.0/deals',
    //   headers: { }
    // };
    axios.get('https://www.cheapshark.com/api/1.0/deals')
    .then((response) => {
      console.log(response.data);
      setDealList(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
    // console.log("useEffect in App");
  }, [])

  const homepage = () => {
    
  }



  return (
    <div className="App">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      {/* <Home homepage={homepage} setDealList={setDealList} dealList={dealList}/> */}
      
      <Routes>
        <Route path='/' element={<Home homepage={homepage} setDealList={setDealList} dealList={dealList} />} />
      </Routes>

    </div>
  );
}

export default App;
