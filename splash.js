const splash = document.querySelector(".splash"),
  toNextButton = document.querySelector(".toLogin"),
  login = document.querySelector(".login");

let toUp = true;

function handleNext() {
  if (toUp) {
    splash.classList.add("toNothing");
    toNextButton.classList.add("toRotate");
    window.setTimeout(remove("toOriginal"), 1000);
    login.classList.remove("loginNone");
    login.classList.add("toNothing");

    console.log("click");
    toUp = false;
  } else {
    splash.classList.add("toOriginal");
    window.setTimeout(remove("toNothing"), 1000);
    toNextButton.classList.remove("toRotate");
    login.classList.add("loginNone");
    toUp = true;
  }
}
function remove(animation) {
  splash.classList.remove(animation);
  login.classList.add("loginNew");
}

function init() {
  toNextButton.addEventListener("click", handleNext);
}
init();
