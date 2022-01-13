const indexes = document.querySelectorAll('[data-index]');
const seeds = document.querySelectorAll('[data-seed]');

// Function gets blank matches and sets value and image path
function fillInNextMatch(i, choice) {
    
    indexes[i].value = choice;
    indexes[i].nextElementSibling.setAttribute("src", `images/${choice}.png`);
}

function blank(i) {
    indexes[i].removeAttribute("value");
    indexes[i].nextElementSibling.setAttribute("src", `images/blank.png`);
};

// Wildcard Matches
const wildcard1 = document.querySelector(".wildcard-1");
wildcard1.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (choice === "steelers") {
        fillInNextMatch(0, choice);
        blank(2);
    } else {
        fillInNextMatch(2, choice);
        blank(0);
    }
});

const wildcard2 = document.querySelector(".wildcard-2");
wildcard2.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (e.target.value === "bills" && indexes[0].value === "patriots") {
        fillInNextMatch(1, choice);
        blank(0);
    } else if (e.target.value === "bills") {
        fillInNextMatch(1, choice);
    } else if (e.target.value === "patriots" && indexes[0].value === "steelers") {
        fillInNextMatch(1, choice);
    } else if (e.target.value === "patriots" && indexes[0].value !== "steelers") {
        fillInNextMatch(0, choice);
        blank(1);
    }
});

const wildcard3 = document.querySelector(".wildcard-3");
wildcard3.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (indexes[0].value === "steelers") {
        fillInNextMatch(2, choice);
    } else if (indexes[0].value === "patriots") {
        fillInNextMatch(1, choice);
    } else if (indexes[1].value === "bills") {
        fillInNextMatch(0, choice);
    } 
});

const wildcard4 = document.querySelector(".wildcard-4");
wildcard4.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (choice === "eagles") {
        fillInNextMatch(5, choice);
        blank(7);
    } else {
        fillInNextMatch(7, choice);
        blank(5);
    }
});

const wildcard5 = document.querySelector(".wildcard-5");
wildcard5.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (e.target.value === "cowboys" && indexes[5].value === "49") {
        fillInNextMatch(6, choice);
        blank(5);
    } else if (e.target.value === "cowboys") {
        fillInNextMatch(6, choice);
    } else if (e.target.value === "49" && indexes[5].value === "eagles") {
        fillInNextMatch(6, choice);
    } else if (e.target.value === "49" && indexes[5].value !== "eagles") {
        fillInNextMatch(5, choice);
        blank(6);
    }
});

const wildcard6 = document.querySelector(".wildcard-6");
wildcard6.addEventListener("input", (e) => {
    const choice = e.target.value;
    if (indexes[5].value === "eagles") {
        fillInNextMatch(7, choice);
    } else if (indexes[5].value === "49") {
        fillInNextMatch(6, choice);
    } else if (indexes[6].value === "cowboys") {
        fillInNextMatch(5, choice);
    } 
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