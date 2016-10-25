const fetchingReducer = function(state ="fetched",action){
  console.log("Inside fetching reducer");
  switch (action.type) {
    case "Fetch_API_Status":
        return  action.status;
      break;
    default:
      return state;
    break;

  }
}

export default fetchingReducer;
