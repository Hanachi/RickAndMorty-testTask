import { combineReducers } from "redux";
import { charactersReducer } from './characters/reducers';
import { episodesReducer } from './episodes/reducers';
import { locationReducer } from './location/reducers';

export default combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  location: locationReducer,
});