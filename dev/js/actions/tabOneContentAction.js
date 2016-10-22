const tabOneContentActoin = function(videoMeta, navTab){
  console.log("Inside function taboneContent");
  return {
    type: "Set_Tab1_Content",
    payload: videoMeta,
    tab: navTab

  }
}

export default tabOneContentActoin;
