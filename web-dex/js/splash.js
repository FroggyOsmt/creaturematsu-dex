const tips = [
  "Please support the original artwork.",
  "Do not repost without permission.",
  "Initializing bio-creatures...",
  "Take care of the little buggies gently.",
  "BOEEEH BANANAAAA~"
];


const randomTip =
  tips[Math.floor(Math.random() * tips.length)];

document.getElementById("splashTip").textContent =
  randomTip;


window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .getElementById("splashScreen")
      .classList.add("hide");
  }, 2500);
});
