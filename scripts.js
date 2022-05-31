// // const sound = getElementsByClassName("deviruch");

// // console.log(deviruchi);
// // console.log(sound);

//     const sound = document.createElement("audio");
//   sound.src = "https://www.mediafire.com/file/xomgaf15e9vivyk/deviruchi_idle.mp3/file";
//     const deviruchi = document.getElementsByClassName("deviruchi");
//     deviruchi.addEventListener("mouseover", (e) => {
//       try {
//         sound.play();
//       } catch (err) {
//         console.log("please why u no workk")
//       }

//     });



// function handlePlay() {
//   if (sound.paused) {
//     sound.play();
//   }
// }



const sound = document.createElement("audio");
sound.src = "/sounds/deviruchi_idle.mp3"
const deviruchi = document.getElementsByClassName("deviruchi");
// console.log(deviruchi);
console.log(sound);
async function playSound() {
  deviruchi.addEventListener("mouseover", (e) => {
    sound
      .play()
      .catch((e) => console.error(e.message, "Now, click here and try again"));
  })
}

// window.onload = playSound;
