const setFilterAction = function(filterTab){
  console.log("Inside setFilterAction, tab selected: "+filterTab);
  console.log(typeof(filterTab));
  return{
    type: "Set_Filter_Tab",
    tab: filterTab
  };
}

export default setFilterAction;
