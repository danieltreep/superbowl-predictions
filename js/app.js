// Function gets blank matches and sets value and image path
function fillInNextMatch(i, choice) {
    const indexes = document.querySelectorAll('[data-index]');
    indexes[i].value = choice;
    indexes[i].nextElementSibling.setAttribute("src", `images/${choice}.png`);
}

// Wildcard Matches
const wildcard1 = document.querySelector(".wildcard-1");
wildcard1.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(0, choice);
});

const wildcard2 = document.querySelector(".wildcard-2");
wildcard2.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(2, choice);
});

const wildcard3 = document.querySelector(".wildcard-3");
wildcard3.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(1, choice);
});

const wildcard4 = document.querySelector(".wildcard-4");
wildcard4.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(7, choice);
});

const wildcard5 = document.querySelector(".wildcard-5");
wildcard5.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(6, choice);
});

const wildcard6 = document.querySelector(".wildcard-6");
wildcard6.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(5, choice);
});

// Divisional round 
const divisional1 = document.querySelector(".divisional-1");
divisional1.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(3, choice);
});

const divisional2 = document.querySelector(".divisional-2");
divisional2.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(4, choice);
});

const divisional3 = document.querySelector(".divisional-3");
divisional3.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(8, choice);
});

const divisional4 = document.querySelector(".divisional-4");
divisional4.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(9, choice);
});

// Championship Round
const championship1 = document.querySelector(".championship-1");
championship1.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(10, choice);
});

const championship2 = document.querySelector(".championship-2");
championship2.addEventListener("input", (e) => {
    const choice = e.target.value;
    fillInNextMatch(11, choice);
});