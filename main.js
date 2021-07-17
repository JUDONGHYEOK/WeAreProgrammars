const sign_btn = document.querySelector(".sign__link");
const sign__lists = document.querySelectorAll(".sign__item");

sign_btn.onmouseout = signout;
sign_btn.onmouseover = signopen;

function signopen() {
  sign__lists.forEach(function (item, index, arr) {
    item.style.animation = "sign-on 0.5s linear forwards";
    item.style.display = "block";
  });
}

function signout() {
  sign__lists.forEach(function (item, index, arr) {
    item.style.animation = "sign-on 0.5s linear reverse";
    item.style.display = "none";
  });
}
