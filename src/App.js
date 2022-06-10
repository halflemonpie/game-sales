import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Game from './components/Game';
import SearchResult from './components/SearchResult';

// to do:

// style
// price at bottom
// font and text style
// set total result
// empty research field
// slide show improve
// clean up code

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

  const handlePageChange = (choice) => {
    if (pageNumber > 0 ) {
      if (choice == "add") {
        setPageNumber(pageNumber + 1)
      } else {
        setPageNumber(pageNumber - 1)
      }
    } else {
      if (choice == "add") {
        setPageNumber(pageNumber + 1)
      } else {
        setPageNumber()
      }
    }
  }



  


  return (
    <div className="App" style={{ background: '#fadde1', color: '#2d00f7' }}>
      <nav className='navbar' style={{ background: '#bde0fe'}}>
        <Link className='nav-link text-primary active' to="/">
          <h1>Shark Sale</h1>
        </Link>
       
        <form className='row'>
          <input  onChange={(e) => {setSearch(e.target.value)}} className='form-control col' type="text" />
          <Link  className='col ps-0' to={`/search/${search}`}>
          <input className="btn btn-primary"  value="Search" type="submit" style={{ background: '#ff9f1c', border:"none" }} />
          </Link>
        </form>
      </nav>
    
      <Routes>
        <Route exact path='/' element={(dealList) ? <Home handlePageChange={handlePageChange} dealList={dealList} pageNumber={pageNumber} setPageNumber={setPageNumber} /> : <h1>loading</h1> } />
        <Route path='/games/:game' element={<Game />}/>
        <Route path='/search/:title' element={<SearchResult />} />
      </Routes>

    </div>
  );
}

export default App;
