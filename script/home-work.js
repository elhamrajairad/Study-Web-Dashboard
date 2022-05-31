let cards = document.querySelectorAll(
  ".main__dashboard__profile__progress__item"
);
cards.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("backgorund--withe")) {
      item.classList.replace("backgorund--withe", "backgorund--fill");
      if (document.querySelectorAll(".backgorund--fill").length > 1) {
        let backgorundWhite = document.querySelectorAll(".backgorund--fill");
        backgorundWhite.forEach((item) => {
          item.classList.replace("backgorund--fill", "backgorund--withe");
        });
      }
    }
  });
});
