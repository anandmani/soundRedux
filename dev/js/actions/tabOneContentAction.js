const tabOneContent = function(videoMeta){
  console.log("Inside function taboneContent");
  return {
    type: "Set_Tab1_Content",
    payload: videoMeta
  }
}

export default tabOneContent;
