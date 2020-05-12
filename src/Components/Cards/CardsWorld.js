import React, { Component } from 'react';
import {Card, CardDeck} from "react-bootstrap";
import CountUp from 'react-countup';


// export class CardsWorld extends Component{
//  constructor(props){ 
//    super(props);
//    this.state = {
//      data: []
//    };
//  }
//   render(){
//     const {data} = this.props;
  export  const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
console.log(lastUpdate);
   if(!confirmed){
     return 'loading..';
   }
        return(
             <div>
  <CardDeck className="text-center">
  <Card border="light">
 
  </Card>

  <Card >
    <Card.Body>
      <Card.Title>Active cases</Card.Title><hr></hr>
      <Card.Text><b>
      <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
      <br></br><br></br></b>
      Number of active cases of COVID-19.
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-primary mb-3">
    <small>Last Updated {new Date(lastUpdate).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card>
    <Card.Body>
      <Card.Title>Recovered cases</Card.Title><hr></hr>
      <Card.Text><b>
      <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
     <br></br><br></br></b>
      Number of recoveries from COVID-19.
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-success mb-3">
    <small>Last Updated {new Date(lastUpdate).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card>
    <Card.Body>
      <Card.Title>Total Deaths</Card.Title><hr></hr>
      <Card.Text><b>
      <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
     <br></br><br></br> </b>
     Number of deaths caused by COVID-19.
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-danger mb-3">
    <small>Last Updated {new Date(lastUpdate).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card border="light">
  </Card>
</CardDeck>
            </div>
        );
    
  };

export default Info;