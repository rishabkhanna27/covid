import React, { Component } from 'react';
import img1 from './main.jpg';

export class DataRed extends Component{
    render(){
        return(
            <div className="red">
                <br></br>
                <p className="tow"><b>
                You Are At a High Risk From Corona Virus</b>
                </p>
                <hr></hr>
                <p className="textdata">
                You are advised for testing as your infection risk is high. Please call the toll free help line-> 1075 to shedule
                your testing.
                Do isolate yourself and Log temperature, avoid contacting with anyone.
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
export default DataRed
