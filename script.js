const hamburger = document.querySelector(".humburger");
const navBarLinks = document.querySelector(".links");

const showMenu = () => {
    navBarLinks.classList.add("active");
};


hamburger.addEventListener("click", showMenu);