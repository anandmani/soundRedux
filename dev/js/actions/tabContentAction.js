const tabContentActoin = function(videoMeta, navTab){
  console.log("Inside function tab Content");
  return {
    type: "Set_Tab_Content",
    payload: videoMeta,
    tab: navTab

  }
}

export default tabContentActoin;
