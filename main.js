let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".nav_bar");

menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}