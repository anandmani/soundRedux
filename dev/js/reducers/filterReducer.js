const filterReducer = function(state=1, action){
  console.log("Inside filterReducer");
  switch(action.type){
    case "Set_Filter_Tab":
      return action.tab;
    break;
    default:
      return state;
    break;
  }
}

export default filterReducer;
