// const sound = document.getElementById("deviruch");
chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    const responseHeaders = details.responseHeaders.map((item) => {
      if (item.name.toLowerCase() === "access-control-allow-origin") {
        item.value = "*";
      }
    });
    return { responseHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders", "extraHeaders"]
);

const sound = document.createElement("audio");
sound.src = "/sounds/deviruchi_idle.mp3"
const deviruchi = document.getElementsByClassName("deviruchi");
// console.log(deviruchi);
console.log(sound);
function playSound() {
  deviruchi.addEventListener("click", (e) => {
    sound
      .play()
      .catch((e) => console.error(e.message, "Now, click here and try again"));
  });
}
// window.onfocus = playSound();
// window.onfocus = playSound();
