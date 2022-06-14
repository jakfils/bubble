// OnClick Audio element
const audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.setAttribute("src", "./zik.mp3");

// Number of clicks counter
let counter = 0;
const counterElt = document.getElementById("counterElt");

// Bubble function
const bubble = () => {
  const circle = document.createElement("span");
  document.body.appendChild(circle);
  circle.classList.add("circle");
  const size = Math.random() * 100 + 100;
  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.top = Math.random() * 100 + 50 + "vh";
  circle.style.left = Math.random() * 100 + "%";
  let alea = 0;
  if (Math.random() >= 0.5) {
    alea = -1;
  } else {
    alea = 1;
  }
  circle.style.setProperty("--left-value", Math.random() * 100 * alea + "%");
  // OnClick bubble
  circle.addEventListener("click", (e) => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
    counter++;
    counterElt.textContent = counter;
    circle.remove();
  });
  // Clear bubble
  setTimeout(() => {
    circle.remove();
  }, 7000);
};

// Call to bublle function 
if (window.matchMedia("(min-width: 700px)").matches) {
  setInterval(bubble, 300);
} else {
  setInterval(bubble, 500);
}


