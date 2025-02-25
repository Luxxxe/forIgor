document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".navbar__items");
  
    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
      burger.classList.toggle("open");
    });
  });

  document.getElementsByClassName(".education__tabs-select").addEventListener("click", function() {
    this.size = this.options.length;
});

document.getElementsByClassName(".education__tabs-select").addEventListener("blur", function() {
    this.size = 1;
});






const tabs = document.querySelectorAll("li");
const blocks = document.querySelectorAll(".content__information");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        blocks.forEach(block => {
            block.classList.remove("active");
        });

        blocks[index].classList.add("active");
    });
});

blocks[0].classList.add("active");