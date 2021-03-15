import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import { getCharacters, changePagination } from '../../store/characters/actions';
import CharacterItem from '../characters/CharacterItem';
import Filters from '../filters/Filters';



const Characters = (props) => {
  const dispatch = useDispatch();
  const { pagination = {},   state, state: {info = {} }, state: { results = [] } = {} } = props;

  useEffect(() => {
      dispatch(getCharacters({}))
  },[]);
  
  const handlePaginationChange = (key, value) => {
    dispatch(changePagination({key, value}))
    dispatch(getCharacters({}))
  }
  // let resultWith10Elements = [];
  // const splitArray = ( array ) => {
  //   while (array.length > 0) {
  //       let arrayElement = array.splice(0,10);
  //       resultWith10Elements.push(arrayElement);
  //   }
  //   return resultWith10Elements;
  // }
  return  (
    <div className='container'>
      <Filters />
      <div className='box-container'>
        {results.map((character, i) => {
            return <CharacterItem
              key={i}
              character={character} 
            />
          })
        }
      </div>
    <Pagination count={info.pages} page={pagination.page} onChange={(event, page) => handlePaginationChange('page', page)} />
    </div>
  )
}

export default Characters