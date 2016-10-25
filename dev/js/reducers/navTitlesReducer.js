const navTitlesReducer = (state=[{title:"",status:"new"},{title:"MrSuicideSheep",status:"new"},{title:"Dota+2",status:"new"},{title:"Crazy+Russian+Hacker",status:"new"},{title:"Monstercat",status:"new"},{title:"Naruto+Songs",status:"new"},{title:"Kenny+Sebastian",status:"new"},{title:"Search",status:"new",searchTitle:""}], action) => {
  console.log("Inside navTitles reducer "+action.type);
  switch(action.type){
    case "Fetch_API_Status":
      //toggle status of tab to fetched
      if(action.status == "fetched"){
        var tab = state.slice(action.tab,action.tab+1);
        tab[0].status = "fetched";
        return (state.slice(0,action.tab).concat(tab)).concat(state.slice(action.tab+1));
      }
      else {
        return state;
      }
    break;
    case "Set_Search_Title":
      var tab = state.slice(state.length-1);
      tab[0].searchTitle = action.payload;
      tab[0].status ="new"; //To make way for new search
      return state.slice(0,state.length-1).concat(tab);
    break;

    default:
      return state;
    break;
  }
}

export default navTitlesReducer;
