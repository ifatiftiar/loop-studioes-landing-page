const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    navList.classList.add("open");
});

close.addEventListener("click", () => {
    navList.classList.remove("open");
});
