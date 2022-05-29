document
  .querySelector(".main__dashboard__profile__progress__items")
  .addEventListener("click", function (e) {
    let items = document.querySelectorAll(
      ".main__dashboard__profile__progress__item"
    );
    items.forEach((item) => {
      if (e.target.dataset.id === item.dataset.id) {
        item.style.backgroundColor = "#E9E3FE";
      }
      if (e.target.dataset.id !== item.dataset.id) {
        item.style.backgroundColor = "#fff";
      }
    });
  });
