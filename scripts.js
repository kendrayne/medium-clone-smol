// const sound = getElementsByClassName("deviruch");

// console.log(deviruchi);
// console.log(sound);

window.addEventListener("DOMContentLoaded", event => {

    const sound = document.createElement("audio");
  sound.src = "https://www.mediafire.com/file/xomgaf15e9vivyk/deviruchi_idle.mp3/file";
    const deviruchi = document.getElementsByClassName("deviruchi");
    deviruchi.addEventListener("mouseonenter", (e) => {
      try {
        sound.play();
      } catch (err) {
        console.log("please why u no workk")
      }
      // .catch((e) => console.error(e.message, "Now, click here and try again"));
    });
  });

// window.onload = playSound;

function handlePlay() {
  if (sound.paused) {
    sound.play();
  }
}
// window.onfocus = playSound();
// window.onfocus = playSound();
