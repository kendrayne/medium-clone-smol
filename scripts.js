// const sound = getElementsByClassName("deviruch");
const sound = document.createElement("audio");
sound.src = "https://www.mediafire.com/file/xomgaf15e9vivyk/deviruchi_idle.mp3/file";
const deviruchi = document.getElementsByClassName("deviruchi");
// console.log(deviruchi);
// console.log(sound);

function playSound() {
  deviruchi.addEventListener("mouseonenter", (e) => {
    try {
      sound.play();
    } catch (err) {
      "please why u no workk"
    }
      // .catch((e) => console.error(e.message, "Now, click here and try again"));
  });
}
// window.onload = playSound;

function handlePlay() {
  if (sound.paused) {
    sound.play();
  }
}
// window.onfocus = playSound();
// window.onfocus = playSound();
