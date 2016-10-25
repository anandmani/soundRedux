const fetchingAction = function(status, tab){
  console.log("Inside fetching action, tab: "+ tab+" status: "+status);
  return{
    type: "Fetch_API_Status",
    status: status,
    tab: tab
  }
}

export default fetchingAction;
