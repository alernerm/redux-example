import { combineReducers } from 'redux';
import postReducer from './postReducer.jsx';

export default combineReducers({
  posts: postReducer
});
