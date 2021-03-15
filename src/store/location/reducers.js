import { PUT_LOCATION, ADD_FILTER, DELETE_FILTER, CHANGE_PAGINATION } from './actions';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE } from '../../constants/pagination.constants'


const initialState = {
  data: {},
  filters: {},
  pagination: {
    per: DEFAULT_ITEMS_PER_PAGE,
    locationPage: DEFAULT_PAGE,
    total: 0
  }
}

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LOCATION:
      return {
        ...state,
        data: action.payload,
      }
    case ADD_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value
        },
        pagination: {
          ...state.pagination,
          locationPage: DEFAULT_PAGE
        }
      }
    case DELETE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload]: null
        },
      }
    case CHANGE_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          [action.payload.key]: action.payload.value
        }
      }
  }
  return state;
};