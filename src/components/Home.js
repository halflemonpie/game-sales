import React, { useEffect } from "react";
import Deal from "./Deal";
import {Routes, Route, Link, Navigate} from 'react-router-dom'


 function Home (props) {
    // let list;
    // useEffect(() => {
        // console.log("in Home");
        // homepage()

        // if (dealList != null) {
            
        // }
    //  handleChange = () => {
        
        let list = [];
        list = props.dealList.map((deal) => {
            return (
                <Link key={deal.dealID} to={`/games/${deal.gameID}`}>
                <Deal deal={deal}/>
                </Link>
            )
        })
        // console.log(list);
    //     useEffect (() => {
    //         console.log("useEffect in Home");
    // })

    //  componentDidUpdate() {
        //  this.setState({
            //  list: this.handleChange
        //  })
    //  }
    // }, [dealList])

   



    // console.log("home");
    // render () {

        return (
            <div>
                <h1>Home</h1>
                {/* {(list === [] ? "<h1>loading</h1>" : {list})} */}
                {list}
            </div>
        )
    // }
}

export default Home