import React, { Component } from 'react';
import {Info} from '../Cards/CardsWorld'
import axios from 'axios';



const url = 'https://covid19.mathdro.id/api';
        export const fetchData = async () => {
    try{
        const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate};
    }catch(error)
    {

    }
}
export class World extends React.Component{
state={
    data:{},
}

async componentDidMount(){

    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
}
    render(){
        const {data}=this.state;
        return(
            <div>
           <Info data={data}/>
           </div>
            )
    }
}
export default World;