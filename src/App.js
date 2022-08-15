import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import GameDetail from "./components/GameDetail";
import SearchResult from "./components/SearchResult";

function App() {
  const [dealList, setDealList] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState();

  useEffect(() => {
    axios
      .get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=${pageNumber}&pageSize=10`
      )
      .then((response) => {
        setDealList(response.data);
      });
  }, [pageNumber]);

  const handlePageChange = (choice) => {
    if (pageNumber > 0) {
      if (choice === "add") {
        setPageNumber(pageNumber + 1);
      } else {
        setPageNumber(pageNumber - 1);
      }
    } else {
      if (choice === "add") {
        setPageNumber(pageNumber + 1);
      } else {
        setPageNumber(0);
      }
    }
  };

  return (
    <div className="App" style={{ background: "#fadde1", color: "#2d00f7" }}>
      <nav className="navbar" style={{ background: "#bde0fe" }}>
        <Link className="nav-link text-primary active" to="/">
          <h1>Shark Sale</h1>
        </Link>
        <form className="row">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control col"
            type="text"
          />
          <Link className="col ps-0" to={`/search/${search}`}>
            <input
              className="btn btn-primary"
              value="Search"
              type="submit"
              style={{ background: "#ff9f1c", border: "none" }}
            />
          </Link>
        </form>
      </nav>

      <Routes>
        <Route
          exact
          path="/"
          element={
            dealList ? (
              <Home
                handlePageChange={handlePageChange}
                dealList={dealList}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            ) : (
              <h1>loading</h1>
            )
          }
        />
        <Route path="/games/:game" element={<GameDetail />} />
        <Route path="/search/:title" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
