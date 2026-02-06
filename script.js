const title = document.querySelectorAll(".title");
title.forEach((title) => {
  title.addEventListener("click", () => {
    const answer = title.nextElementSibling;
    const icon = title.querySelector(".plus-icon");
    answer.hidden = !answer.hidden;
    if (answer.hidden) {
      icon.src = "./assets/images/icon-plus.svg";
    } else {
      icon.src = "./assets/images/icon-minus.svg";
    }
  });
});
