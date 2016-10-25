const setNextPageTokenAction = function(navTab, token){
  console.log("Inside setNextPageTokenAction: navtab: "+navTab+" token"+ token);

  return{
    type: "Set_Next_Page_Token",
    tab: navTab,
    token: token
  }
}

export default setNextPageTokenAction;
