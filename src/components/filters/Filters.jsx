import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { addFilter } from '../../store/characters/actions';
import { getCharacters } from '../../store/characters/actions';


import { FILTERS_KEYS, STATUS_OPTIONS, GENDER_OPTIONS } from '../../constants/filter.constants';
import '../../styles/style.css';


const Filters = (props) => {
  
  const [selectValue, setValue] = useState({})
  const dispatch = useDispatch();
  const handleChange = (key, value) => {
    dispatch(addFilter({key, value}));
    setValue((prevState) => ({
      ...prevState,
      [key]: value
    }))  
    dispatch(getCharacters({}));
  };

  return (
    <div className='filterItems'>
      <h3 className='formControl'>FILTERS:</h3>
      <FormControl className='formControl'>
      {/* STATUS */}
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={selectValue.status}
          onChange={(event) => handleChange(FILTERS_KEYS.status, event.target.value)}
        >
            <MenuItem value={undefined}>
              <em>None</em>
            </MenuItem>
          {STATUS_OPTIONS.map(option => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* GENDER */}
      <FormControl className='formControl'>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={selectValue.gender}
          onChange={(event) => handleChange(FILTERS_KEYS.gender, event.target.value)}
        >
            <MenuItem value={undefined}>
              <em>None</em>
            </MenuItem>
          {GENDER_OPTIONS.map(option => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* SPECIES */}
      <FormControl className='formControl'>
        <TextField 
          id="standard-search"
          label="Species"
          value={selectValue.species}
          onChange={(event) => handleChange(FILTERS_KEYS.species, event.target.value)}
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
    </div>
  )
}


export default Filters