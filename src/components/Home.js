import React, { useEffect, useState } from "react";
import Deal from "./Deal";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


 function Home ({dealList, pageNumber, setPageNumber, handlePageChange}) {

        const [slides, setSlides] = useState([]);
        let slidesDisplay;



        
        if (slides.length > 0) {
            let slidesShow = [];
            slidesShow = slides.filter((value, index, self) => index === self.findIndex((t) => (t.place === value.place && t.name === value.name)))
            
            const tags = slidesShow.map((item) => {
                return item.genres
            })

            const handleTags = (index) => {
                const tag = tags[index].map((item) => {
                    return <li class="btn btn-primary mx-1">{item.description}</li>
                })
                return tag
            }


            slidesDisplay = (
                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    </div>
                    <div className="carousel-inner">
                        <a href={`https://store.steampowered.com/app/${slidesShow[0].steam_appid}`} target="_blank">
                        <div className="carousel-item active">
                        <img src={slidesShow[0].header_image} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[0].name}</h5>
                            <ul>{handleTags(0)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[1].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[1].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[1].name}</h5>
                            <ul>{handleTags(1)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[2].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[2].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[2].name}</h5>
                            <ul>{handleTags(2)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[3].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[3].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[3].name}</h5>
                            <ul>{handleTags(3)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[4].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[4].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[4].name}</h5>
                            <ul>{handleTags(4)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[5].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[5].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[5].name}</h5>
                            <ul>{handleTags(5)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[6].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[6].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[6].name}</h5>
                            <ul>{handleTags(6)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[7].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[7].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[7].name}</h5>
                            <ul>{handleTags(7)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[8].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[8].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[8].name}</h5>
                            <ul>{handleTags(8)}</ul>
                        </div>
                        </div>
                        </a>

                        <a href={`https://store.steampowered.com/app/${slidesShow[9].steam_appid}`} target="_blank">
                        <div className="carousel-item">
                        <img src={slidesShow[9].header_image}  className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-opacity-25">
                            <h5>{slidesShow[9].name}</h5>
                            <ul>{handleTags(9)}</ul>
                        </div>
                        </div>
                        </a>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            ) 
           
            
        }

        

        

        let list = [];
        for (let i = 0; i < dealList.length; i++) {
            list.push(dealList[i]);
        }
        let listDisplay;
        listDisplay = list.map((deal) => {
            return (
                <Link className="col-6 text-decoration-none mb-3" key={deal.steamAppID} to={`/games/${deal.gameID}`}>
                <Deal slides={slides} setSlides={setSlides} deal={deal} savings={Math.floor(deal.savings)} id={deal.steamAppID}/>
                </Link>
            )
        })


        return (
            <div>
                {slidesDisplay}
                <h1 style={{ color: '#2d00f7' }} className="text-center mt-4" >Deals</h1>
                <div className="d-flex justify-content-around my-4"> 
                <button style={{ background: '#ff9f1c', border:"none"}} onClick={() => {handlePageChange('min')}} className="btn btn-primary">Previous</button>
                <span style={{ background: '#ff9f1c', border:"none"}} className="btn btn-primary">Page: {pageNumber + 1}</span>
                <button style={{ background: '#ff9f1c', border:"none"}} onClick={() => {handlePageChange('add')}} className="btn btn-primary">Next</button>
                </div>
               <div className="row">
                {listDisplay}
               </div>
               <div className="d-flex justify-content-around my-2"> 
                <button style={{ background: '#ff9f1c', border:"none"}} onClick={() => {handlePageChange('min')}} className="btn btn-primary">Previous</button>
                <span style={{ background: '#ff9f1c', border:"none"}} className="btn btn-primary">Page: {pageNumber + 1}</span>
                <button style={{ background: '#ff9f1c', border:"none"}} onClick={() => {handlePageChange('add')}} className="btn btn-primary">Next</button>
                </div>
            </div>
        )

}

export default Home