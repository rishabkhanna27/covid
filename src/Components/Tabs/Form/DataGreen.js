import React, { Component } from 'react';
import img1 from './main.jpg';

export class DataGreen extends Component{
    render(){
        return(
            <div className="green">
                <br></br>
                <p className="tow"><b>
                You Have Low Risk From Corona Virus</b>
                </p>
                <hr></hr>
                <p className="textdata">
                With timely medical intervention, safety and with good hygiene we can beat the spread of Coronavirus.
                Please help us to fight against Covid-19 by staying at home and taking care of yourself and your Nation. 
                </p>
                <br></br>
                <p className="tow"><b>
               # Stay Home
                Stay Safe<br></br>
                Central Helpline Number for corona-virus-> +91-11-23978046</b>
                <br></br>
                </p>
                <img className='imagee' src={img1} alt=""/><br></br><br></br>
            </div>
        )
    }
}
export default DataGreen
