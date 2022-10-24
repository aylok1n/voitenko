const root = document.querySelector("#root");
const input = document.querySelector("#input");

input.addEventListener("change", (e) => {
  const count = Number(e.target.value);

  for (let i = 0; i < count; i++) {
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.src = "./assets/video.mp4";
    root.appendChild(video);
    video.load();
    video.play();
  }
});
