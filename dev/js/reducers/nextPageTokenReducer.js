const nextPageTokenReducer = function(state=["","","","","","","",""], action){
  console.log("Inside nextPageTokenReducer");
  console.log(typeof(action.token));
  switch (action.type) {
    case "Set_Next_Page_Token":
      // var tab = state.slice(action.tab,action.tab+1);
      // tab[0].nextPageToken = action.token;
      // return (state.slice(0,action.tab).concat(tab)).concat(state.slice(action.tab+1));
      var tokenArray = [...state];
      tokenArray[action.tab] = action.token;
      return tokenArray;
    break;
    default:
      return state;
    break;
  }
}

export default nextPageTokenReducer;
