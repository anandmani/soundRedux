import {combineReducers} from 'redux';
import navReducer from './navReducer.js';
import tabOneContentReducer from './tabOneContentReducer.js';
import navTitlesReducer from './navTitlesReducer.js';

// export default function(){
//   return combineReducers({
//     navState: navReducer,
//     tabOneContentState: tabOneContentReducer
//   });
// }

//NOTE THE FUCKING SYNTAX!! IT'S NOT A function

const allReducers = combineReducers({
  navState: navReducer,
  tabOneContentState: tabOneContentReducer,
  navTitlesState: navTitlesReducer
});

export default allReducers;
