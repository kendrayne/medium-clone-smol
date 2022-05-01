// var sound = document.getElementById("deviruch");


// function playSound() {
//   sound.play();
// }

deviruchi.addEventListener("mouseenter", (e) => {
  deviruch.play().catch((er) => console.error(er.message, "Now, click here and try again"));
});
