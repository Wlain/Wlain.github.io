// 設置攝影機
const getCameraStream = video => {
  // 攝影機前鏡頭
  const constraints = {
    audio: false,
    video: {
      // facingMode: "user",
      facingMode: "environment"
    }
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function success(stream) {
      video.srcObject = stream;
    });
};

// 建立影片
const createVideo = (id, width, height) => {
  let video = document.createElement("video");
  video.id = id;
  video.width = width;
  video.height = height;
  video.autoplay = true;
  video.controls = true;
  return video;
};

const init = () => {
  let video = createVideo("vid", 720, 1280);
  let originImg = document.getElementById("origin-img");
  getCameraStream(video);
  originImg.appendChild(video);
  console.log("init");
};

init();
