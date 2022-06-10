import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameDetail() {
  let param = useParams().game;
  const [current, setCurrent] = useState();

  async function cheapSharkCall() {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${param}`)
      .then((res) => {
        setCurrent(res.data);
      });
  }

  useEffect(() => {
    cheapSharkCall();
  }, []);

  let list;
  if (current) {
    list = current.deals.map((deal) => {
      return (
        <div
          style={{ background: "#a2d2ff", color: "#2d00f7" }}
          className="card mb-4"
          key={deal.dealID}
        >
          <img
            className="card-img-top"
            src={`https://www.cheapshark.com/img/stores/logos/${deal.storeID}.png`}
          />

          <div className="card-body">
            <p className="mb-0 card-text">
              Savings: {Math.floor(deal.savings)}%
            </p>
            <p className="mb-0 card-text">
              <del>${deal.retailPrice}</del>
            </p>
            <p className="mb-0 card-test">price: ${deal.price}</p>
          </div>
        </div>
      );
    });
  } else {
    list = <h1>loading</h1>;
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      {current ? (
        <img className="text-center" src={current.info.thumb} />
      ) : (
        <h1>loading</h1>
      )}
      {current ? (
        <h1 className=" text-center">{current.info.title}</h1>
      ) : (
        <h1>loading</h1>
      )}
      {current ? (
        <a
          style={{ border: "none" }}
          className="text-center btn"
          href={`https://store.steampowered.com/app/${current.info.steamAppID}`}
          target="_blank"
        >
          <i class="fa-brands fa-steam"></i>steam page
        </a>
      ) : (
        <h1>loading</h1>
      )}
      {current ? (
        <p className="text-center">
          History Low: {current.cheapestPriceEver.price}
        </p>
      ) : (
        <h1>loading</h1>
      )}
      <div className="d-flex flex-wrap justify-content-around">{list}</div>
    </div>
  );
}
