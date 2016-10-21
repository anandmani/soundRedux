export default function(state=[], action){
  console.log("Inside tab 1 reducer");
  switch(action.type){
    case "Set_Tab1_Content":
      return [...state,action.payload];
    break;

    default:
     return state;
    break;
  }
}
