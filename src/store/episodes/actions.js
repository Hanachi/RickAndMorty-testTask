export const PUT_EPISODES = 'PUT_EPISODES';
export const ADD_FILTER = 'ADD_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';
export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';

const API = 'https://rickandmortyapi.com/api/episode/?';

export const putEpisodes = (dataFromServer) => {
  return {
    type: PUT_EPISODES,
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


export const getEpisodes = () => (dispatch, getState) => {
  fetch(API + new URLSearchParams({
  ...JSON.parse(JSON.stringify(getState().episodes.filters)),
  page:getState().episodes.pagination.episodePage,
  per:getState().episodes.pagination.per
  }))
  .then(response => response.json())
  .then(json => {
    dispatch(putEpisodes(json));
  })
}