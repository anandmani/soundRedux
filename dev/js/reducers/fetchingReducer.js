const fetchingReducer = function(state ="idle",action){
  console.log("Inside fetching reducer");
  switch (action.type) {
    case "Fetch_API_Status":
        return  action.payload;
      break;
    default:
      return state;
    break;

  }
}

export default fetchingReducer;
