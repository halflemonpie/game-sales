import React, { useEffect } from "react";
import Deal from "./Deal";

 function Home (props) {
    // let list;
    // useEffect(() => {
        // console.log("in Home");
        // homepage()

        // if (dealList != null) {
            
        // }
    //  handleChange = () => {
        
        let list;
        list = props.dealList.map((deal) => {
            return <Deal key={deal.dealID} deal={deal}/>
        })
        useEffect (() => {
            console.log("useEffect in Home");
    })

    //  componentDidUpdate() {
        //  this.setState({
            //  list: this.handleChange
        //  })
    //  }
    // }, [dealList])

   



    console.log("home");
    // render () {

        return (
            <div>
                <h1>Home</h1>
                {list}
            </div>
        )
    // }
}

export default Home