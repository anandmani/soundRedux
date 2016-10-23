export default function(state=[[],[],[],[],[],[],[]], action){
  console.log("Inside tab 1 reducer");
  console.log(typeof(action.tab));
  switch(action.type){
    case "Set_Tab1_Content":
      // return [...state,action.payload];
      var tabArray = state.slice(action.tab,action.tab+1);  //retrieving correct tab to push video in
      tabArray = tabArray[0];
      console.log("slicing "+action.tab);
      console.log(action.tab+1);
      tabArray.push(action.payload);
      console.log("tabArray");
      console.log(tabArray);
      //pre array of arrays [[1],[2]]
      //current array [3]
      //post array of arrays [[4],[5]]
      var preArray = state.slice(0,action.tab);
      preArray.push(tabArray);
      console.log("reducer returns");
      return preArray.concat(state.slice(action.tab+1));
    break;

    default:
    console.log("default, returns: ");
    console.log(state);
     return state;
    break;
  }
}
