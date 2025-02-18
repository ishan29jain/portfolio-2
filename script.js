// Tab Switching Logic
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typed.js for Dynamic Text
var typed = new Typed('#element', {
    strings: ['Web Developer.', 'UI/UX Designer.', 'AI Enthusiast.'],
    typeSpeed: 100,
});

// Add or remove the "scrolled" class based on scroll position
window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) { // Add "scrolled" class after scrolling 50px
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});