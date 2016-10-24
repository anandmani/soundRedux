const setSearchTitle = function(title){
  console.log("Inside setSearchTitleAction");
  return{
    type: "Set_Search_Title",
    payload: title
  }
}

export default setSearchTitle;
