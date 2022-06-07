import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Game from './components/Game';

function App() {
  const [dealList, setDealList] = useState([])
  
  useEffect(() => {
    
    axios.get('https://www.cheapshark.com/api/1.0/deals')
    .then((response) => {
      // console.log(response.data);
      setDealList(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])


  return (
    <div className="App">
      
      <Link to="/">
        <h1>Home</h1>
      </Link>
    
      <Routes>
        <Route exact path='/' element={(dealList === []) ? <h1>loading</h1> : <Home setDealList={setDealList} dealList={dealList} />} />
        <Route path='/games/:game' element={(dealList === []) ? <h1>loading</h1> : <Game />}/>
      </Routes>

    </div>
  );
}

export default App;
