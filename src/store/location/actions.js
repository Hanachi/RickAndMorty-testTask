export const PUT_LOCATION = 'PUT_LOCATION';
export const ADD_FILTER = 'ADD_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';
export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';

const API = 'https://rickandmortyapi.com/api/location/?';

export const putLocation = (dataFromServer) => {
  return {
    type: PUT_LOCATION,
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


export const getLocation = () => (dispatch, getState) => {
  fetch(API + new URLSearchParams({
  ...JSON.parse(JSON.stringify(getState().location.filters)),
  page:getState().location.pagination.locationPage,
  per:getState().location.pagination.per
  }))
  .then(response => response.json())
  .then(json => {
    dispatch(putLocation(json));
  })
}