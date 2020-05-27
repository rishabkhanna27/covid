import React, { Component } from 'react';
import img1 from './main.jpg';

export class DataOrange extends Component{
    render(){
        return(
            <div className="orange">
                <br></br>
                <p className="tow"><b>
                You Have Medium Risk From Corona Virus</b>
                </p>
                <hr></hr>
                <p className="textdata">You have a chance to get infected by Covid-19 So please take care of your health and get your health checkup as soon as possible and 
                also avoid any  kind of contact with anyone even with your family before consulting a doctor.</p>
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
export default DataOrange
