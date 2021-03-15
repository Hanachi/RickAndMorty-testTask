import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { addFilter } from '../../store/location/actions';
import { getLocation } from '../../store/location/actions';


import { FILTERS_KEYS } from '../../constants/filter.constants';
import '../../styles/style.css';


const LocationFilters = (props) => {
  
  const [selectValue, setValue] = useState({})
  const dispatch = useDispatch();
  const handleChange = (key, value) => {
    dispatch(addFilter({key, value}));
    setValue((prevState) => ({
      ...prevState,
      [key]: value
    }))  
    dispatch(getLocation({}));
  };

  return (
    <div className='filterItems'>
      <h3 className='formControl'>FILTERS:</h3>
      {/* EPISODE */}
      <FormControl className='formControl'>
        <TextField 
        id="standard-search"
         label="Type"
         value={selectValue.type}
         onChange={(event) => handleChange(FILTERS_KEYS.type, event.target.value)}
         type="search" 
        />
      </FormControl>
      {/* NAME */}
      <FormControl className='formControl'>
        <TextField 
        id="standard-search"
         label="Name"
         value={selectValue.name}
         onChange={(event) => handleChange(FILTERS_KEYS.name, event.target.value)}
         type="search" 
        />
      </FormControl>
      {/* DIMENSION */}
      <FormControl className='formControl'>
        <TextField 
        id="standard-search"
         label="Dimension"
         value={selectValue.dimension}
         onChange={(event) => handleChange(FILTERS_KEYS.dimension, event.target.value)}
         type="search" 
        />
      </FormControl>
    </div>
  )
}


export default LocationFilters