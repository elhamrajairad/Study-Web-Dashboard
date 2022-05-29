let parent = document.querySelector(
  ".main__dashboard__profile__progress__items"
);
parent.addEventListener("click", setBackGround, false);

function setBackGround(e) {
  if (e.target.matches(".main__dashboard__profile__progress__item")) {
    e.target.matches(
      ".main__dashboard__profile__progress__item"
    ).style.backgroundColor = "red";
  }
}
