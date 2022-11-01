// Javascript for input
const output1 = document.getElementById('js--output--1');
const output2 = document.getElementById('js--output--2');
const output3 = document.getElementById('js--output--3');
const input = document.getElementById('js--input');

input.oninput = function(event) {
    output1.innerText = event.target.value
    output2.innerText = event.target.value
    output3.innerText = event.target.value
};

// Javascript for favorites
const stars = document.getElementsByClassName('star');
for (let i = 0; i < stars.length; i++) {
    stars[i].onclick = function(event) {
        for (let i = 0; i < stars.length; i++) {
            stars[i].children[0].classList = 'fa-regular fa-star star__logo';
        }
        stars[i].children[0].classList = 'fa-solid fa-star star__logo';
    }
}

// Javascript for darkmode
//
// ToggleButton
const toggleButton = document.getElementById("toggle");
// Body
const body = document.body;
// Header
const header = document.getElementsByClassName("header");
// Showcase
const showcase = document.getElementsByClassName("showcase");
// showcaseInput
const showcaseInput = document.getElementsByClassName("showcase__input");



toggleButton.onclick = function() {
    // body
    body.classList.toggle("body__darkmode");
    // header 
    header[0].classList.toggle("header__darkmode");
    // showcase
    showcase[0].classList.toggle("showcase__darkmode");
    // showcaseInput
    showcaseInput[0].classList.toggle("showcase__darkmode__input");
}