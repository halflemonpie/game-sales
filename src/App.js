import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Game from './components/Game';
import SearchResult from './components/SearchResult';

// to do:
// prevent -1 page
// fade background for the store list
// link to each store
// style
// same card size
// price at bottom
// font and text style
// set total result and page number
// empty research field
// slide show click to detail
// slide show improve

function App() {
  const [dealList, setDealList] = useState()
  const [pageNumber, setPageNumber] = useState(0)
  const [search, setSearch] = useState()
 
  

  useEffect(() => {
    
    axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=${pageNumber}&pageSize=10`)
    .then((response) => {
      // console.log(response.data);
      setDealList(response.data)
    })
    .catch((error) => {
      console.log(error);
    }); 
  }, [pageNumber])

  const handleSearch = () => {
    console.log("click");
  }



  


  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark'>
        <Link className='nav-link text-primary active' to="/">
          <h1>Home</h1>
        </Link>
       
        <form className='row'>
          <input  onChange={(e) => {setSearch(e.target.value)}} className='form-control col' type="text" />
          <Link  className='col' to={`/search/${search}`}>
          <input className="btn btn-primary"  value="Search" type="submit" />
          </Link>
        </form>
      </nav>
    
      <Routes>
        <Route exact path='/' element={(dealList) ? <Home dealList={dealList} pageNumber={pageNumber} setPageNumber={setPageNumber} /> : <h1>loading</h1> } />
        <Route path='/games/:game' element={<Game />}/>
        <Route path='/search/:title' element={<SearchResult />} />
      </Routes>

    </div>
  );
}

export default App;
