//HTML input tag id ='video_input' needed

//Elements query
const fileInput = document.getElementById("video_input");
const video = document.createElement("video");
const canvas = document.createElement("canvas");
const canvasCTX = canvas.getContext("2d");
const downloadAnchor = document.createElement('a');

//input Attrs
fileInput.setAttribute("type", "file");
fileInput.setAttribute("accept", "video/mp4");

//make video & it's source
video.setAttribute("src", URL.createObjectURL(fileInput?.files[0]));

//When Video's metadata is loaded
video.addEventListener("loadedmetadata", () => {
  //Dimension of canvas = video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
});

// When Video is Seeked(Fully ready)
video.addEventListener("seeked", () => {
    //set capture frame(seconds) to make it Thumbnail
  video.currentTime = 0 //video playbacl 0 seconds will be captured.
  canvasCTX.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
});

//make Download link;
downloadAnchor.setAttribute('href', canvas.toDataURL());
downloadAnchor.setAttribute('download', thumbnail.png);

//append chiild <a> element to HTML DOM or make function to trigger click event;
downloadAnchor.click();
