const navSelectAction = (navTab) =>{
  console.log("Inside navSelectAction. Switching to tab "+navTab);
  return {
    type: "Switch_Nav_Tab",
    payload: navTab
  }
}

export default navSelectAction;
