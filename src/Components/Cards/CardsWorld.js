import React, { Component } from 'react';
import {Card, CardDeck} from "react-bootstrap";
import CountUp from 'react-countup';
import styles from './Cards.module.css';

export  const Info = ({ data: { cases, recovered, deaths, updated} }) => {
   if(!cases){
     return 'loading..';
   }
        return(
             <div>
               <div className={styles.container}><b><u>&#127757;COVID-19 WORLD TRACKER</u></b></div>
               <div className="center">
  <CardDeck className="text-center ">
  <Card border="light">
 
  </Card>

  <Card >
    <Card.Body>
      <Card.Title>Total cases</Card.Title><hr></hr>
      <Card.Text>Number of total cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={cases} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-primary mb-3">
    <small>Last Updated {new Date(updated).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card>
    <Card.Body>
      <Card.Title>Recovered cases</Card.Title><hr></hr>
      <Card.Text>
      Number of recoveries from COVID-19.<br></br>
      <b>
      <CountUp start={0} end={recovered} duration={2.75} separator="," />
     </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-success mb-3">
    <small>Last Updated {new Date(updated).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card>
    <Card.Body>
      <Card.Title>Total Deaths</Card.Title><hr></hr>
      <Card.Text>
      
     Number of deaths caused by COVID-19.<br></br>
     <b><CountUp start={0} end={deaths} duration={2.75} separator="," />
      </b>
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-danger mb-3">
    <small>Last Updated {new Date(updated).toDateString()}</small>
    </Card.Footer>
  </Card >
  <Card border="light">
  </Card>
</CardDeck>
            </div>
            </div>
        );
    
  };

export default Info;