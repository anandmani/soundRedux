const nextPageTokenReducer = function(state=["","","","","","","",""], action){
  console.log("Inside nextPageTokenReducer");
  switch (action.type) {
    case "Set_Next_Page_Token":
      var tab = state.slice(action.tab,action.tab+1);
      tab[0].nextPageToken = action.token;
      return (state.slice(0,action.tab).concat(tab)).concat(state.slice(action.tab+1));
    break;
    default:
      return state;
    break;
  }
}
