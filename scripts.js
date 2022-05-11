// const sound = document.getElementById("deviruch");
const sound = "/Users/kendra/Desktop/medium-clone-proj/sounds/deviruchi_idle.mp3"
const deviruchi = document.getElementsByClassName("deviruchi");

function playSound() {
  deviruchi.addEventListener("onmouseover", (e) => {
    sound
      .play()
      .catch((e) => console.error(e.message, "Now, click here and try again"));

  })
}
// window.onfocus = playSound();
// window.onfocus = playSound();
