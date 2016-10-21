const navReducer = function(state = 1, action){
  console.log("inside nav reducer");
  console.log(""+action.type);
  switch(action.type){
    case "Switch_Nav_Tab":
      return action.payload;
    break;
    default:
      return state;
    break;
  }
}

export default navReducer;
