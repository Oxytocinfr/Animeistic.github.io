let menu = document.querySelector("#menu-bars");
let search = document.querySelector("#search");
let navbar = document.querySelector(".nav_bar");
let searchbar = document.querySelector(".search_bar");

menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
    search.classList.toggle('fa-time');
    searchbar.classList.toggle('active');
}