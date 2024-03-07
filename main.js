const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".nav");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
})