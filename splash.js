const iconContainer = document.querySelector(".splash__icon__container"),
  icon = iconContainer.querySelector("i");

function handleHover() {
  icon.style.animation = "rotate 1s linear infinite";
  console.log("hover");
}
function handleOut() {
  icon.style.animation = "";
}
function handleClick(e) {
  iconContainer.querySelector("h2").innerHTML = "";
  iconContainer.style.animation = "toBig 2s linear forwards";
  e.preventDefault();
  setTimeout(submit, 2000);
}
function submit() {
  const toMove = document.querySelector("a");
  toMove.submit();
}
function init() {
  iconContainer.addEventListener("mouseover", handleHover);
  iconContainer.addEventListener("mouseout", handleOut);
  iconContainer.addEventListener("click", handleClick);
}
init();
