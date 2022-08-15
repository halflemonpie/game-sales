import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Deal({ deal, savings, id, slides }) {
  const [games, setGames] = useState();

  useEffect(() => {
    axios
      .get(
        `https://store.steampowered.com/api/appdetails?appids=${id}`
      )
      .then((response) => {
        setGames(response.data[id].data);
        slides.push(response.data[id].data);
      });
      // eslint-disable-next-line
  }, []);

  let detail;
  if (games) {
    const short_description = games.short_description;
    const header_image = games.header_image;
    detail = (
      <div>
        <p>{short_description}</p>
        <img src={header_image} className="card-img-bottom" alt={deal.title}/>
      </div>
    );
  } else {
    detail = <Loading />;
  }

  return (
    <div
      style={{ background: "#a2d2ff", color: "#2d00f7" }}
      className="card mb-2"
    >
      <div className="card-body">
        <h5 className="card-title fw-bold">{deal.title}</h5>
        <p className="card-text">
          <s>{deal.normalPrice}</s>
        </p>
        <p className="card-text">Savings:{savings}%</p>
        <p className="card-text">Price:{deal.salePrice}</p>
      </div>
      {detail}
    </div>
  );
}
