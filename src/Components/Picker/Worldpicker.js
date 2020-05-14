import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../Tabs/World';
import styles from './picker.module.css';

export const Picker = ({handleCountryChange}) => {
    const[ fetchedCountries, setFetchedCountries]= useState([]);
    useEffect(() => {
    const fetchApi = async() => {
        setFetchedCountries(await  fetchCountries());
    }
    fetchApi();
}, [setFetchedCountries]);
//console.log(fetchedCountries);

return (
    <div>
      <h5 className={styles.divv}><b>&#9898;<u>Search Country</u>&#9898;</b></h5>
    <FormControl className={styles.formControl}>
      
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
    
  )
}
export default Picker;