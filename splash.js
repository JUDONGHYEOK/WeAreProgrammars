const splash = document.querySelector(".splash"),
  toNextButton = document.querySelector(".toLogin"),
  login = document.querySelector(".login");

let toUp = true;

function handleNext() {
  if (toUp) {
    splash.classList.add("toNothing");
    toNextButton.classList.add("toRotate");
    console.log(splash.classList);
    window.setTimeout(remove, 1000,"toOriginal");
    login.classList.remove("loginNone");
    login.classList.add("toNothing");
    toUp = false;
  } else {
    splash.classList.add("toOriginal");
    console.log(splash.classList);
    window.setTimeout(remove, 1000,"toNothing");
    toNextButton.classList.remove("toRotate");
    login.classList.add("loginNone");
    toUp = true;
  }
}
function remove(animation) {
  splash.classList.remove(animation);
  login.classList.add("loginNew");
  console.log(splash.classList);
}

function init() {
  toNextButton.addEventListener("click", handleNext);
}
init();
