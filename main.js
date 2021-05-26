const sign_btn = document.querySelector(".sign__link");
const sign__lists = document.querySelectorAll(".sign__item");
const sliderScreens = document.querySelectorAll(".card-slider__sub");
const slideToNext = document.querySelector(".card-slider__icon__right");
const slideToPrev = document.querySelector(".card-slider__icon__left");
let currentCardPosition = 0;
let currentCard = sliderScreens.item(currentCardPosition);

sign_btn.onmouseout = signout;
sign_btn.onmouseover = signopen;
console.log(Object.keys(sliderScreens).length);

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

slideToNext.addEventListener("click", () => {
  nextCard();
  clearInterval(nextCardInterval);
  nextCardInterval = setInterval(nextCard, 2000);
});

slideToPrev.addEventListener("click", () => {
  previousCard();
  clearInterval(nextCardInterval);
  nextCardInterval = setInterval(nextCard, 2000);
});
function nextCard() {
  currentCard.style.display = "none";
  if (currentCardPosition + 1 <= Object.keys(sliderScreens).length - 1) {
    currentCardPosition++;
  } else {
    currentCardPosition = 0;
  }
  currentCard = sliderScreens.item(currentCardPosition);
  currentCard.style.display = "flex";
  currentCard.style.width = "100%";
  currentCard.style.height = "100%";
}

function previousCard() {
  currentCard.style.display = "none";
  if (currentCardPosition != 0) {
    currentCardPosition--;
  } else {
    currentCardPosition = Object.keys(sliderScreens).length - 1;
  }
  currentCard = sliderScreens.item(currentCardPosition);
  currentCard.style.display = "flex";
  currentCard.style.width = "100%";
  currentCard.style.height = "100%";
}
let nextCardInterval = setInterval(nextCard, 2000);
