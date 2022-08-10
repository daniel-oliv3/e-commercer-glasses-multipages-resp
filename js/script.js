/* */
let searchForm = document.querySelector('.header .search-form');


document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}



let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}