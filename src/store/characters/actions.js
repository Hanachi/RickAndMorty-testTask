export const PUT_CHARACTERS = 'PUT_CHARACTERS';
export const ADD_FILTER = 'ADD_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';
export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';

const API = 'https://rickandmortyapi.com/api/character/?';

export const putCharacters = (dataFromServer) => {
  return {
    type: PUT_CHARACTERS,
    payload: dataFromServer
  };
};

export const addFilter = (payload) => {
  return {
    type: ADD_FILTER,
    payload
  };
}

export const deleteFilter = (payload) => {
  return {
    type: DELETE_FILTER,
    payload
  };
}

export const changePagination = (payload) => {
  return {
    type: CHANGE_PAGINATION,
    payload
  };
}


export const getCharacters = () => (dispatch, getState) => {
  fetch(API + new URLSearchParams({
  ...JSON.parse(JSON.stringify(getState().characters.filters)),
  page:getState().characters.pagination.page,
  per:getState().characters.pagination.per
  }))
  .then(response => response.json())
  .then(json => {
    dispatch(putCharacters(json));
  })
}