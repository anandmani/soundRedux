import {combineReducers} from 'redux';
import navReducer from './navReducer.js';
import tabContentReducer from './tabContentReducer.js';
import navTitlesReducer from './navTitlesReducer.js';
import fetchingReducer from './fetchingReducer.js';
import nextPageTokenReducer from './nextPageTokenReducer';
// export default function(){
//   return combineReducers({
//     navState: navReducer,
//     tabContentState: tabContentReducer
//   });
// }

//NOTE THE FUCKING SYNTAX!! IT'S NOT A function

const allReducers = combineReducers({
  navState: navReducer,
  tabContentState: tabContentReducer,
  navTitlesState: navTitlesReducer,
  fetchingState: fetchingReducer,
  nextPageState: nextPageTokenReducer
});

export default allReducers;
