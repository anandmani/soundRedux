export default function(state = 1, action){
  switch(action.type){
    case "Switch_Nav_Tab":
      return action.payload;
    break;
    default:
      return state;
    break;
  }
}
