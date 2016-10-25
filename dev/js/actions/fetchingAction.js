const fetchingAction = function(status){
  console.log("Inside fetching action, status: "+ status);
  return{
    type: "Fetch_API_Status",
    payload: status
  }
}

export default fetchingAction;
