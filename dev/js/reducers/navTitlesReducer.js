const navTitlesReducer = (state=[{title:"",status:"new"},{title:"MrSuicideSheep",status:"new"},{title:"Dota+2",status:"new"},{title:"Crazy+Russian+Hacker",status:"new"},{title:"Documentaries",status:"new"},{title:"Naruto+Songs",status:"new"},{title:"Kenny+Sebastian",status:"new"},{title:"Search",status:"new"}], action) => {
  console.log("Inside navTitles reducer");
  switch(action.type){
    case "Set_Tab1_Content":
      //toggle status of tab to fetched
      var tab = state.slice(action.tab,action.tab+1);
      tab[0].status = "fetched";
    return (state.slice(0,action.tab).concat(tab)).concat(state.slice(action.tab+1));
    default:
      return state;
    break;
  }
}

export default navTitlesReducer;
