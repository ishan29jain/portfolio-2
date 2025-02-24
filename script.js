
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


var typed = new Typed('#element', {
    strings: ['Web Developer.', 'UI/UX Designer.', 'AI Enthusiast.'],
    typeSpeed: 100,
});



let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {

        nav.classList.add("scrolled");
    } else {

        nav.classList.remove("scrolled");
    }


    lastScrollPosition = currentScrollPosition;
    nav.addEventListener("mouseenter", () =>{
        nav.classList.remove("scrolled");
    })

});

const projectsContainer = document.getElementById("projectsContainer");


const scrollSpeed = 4;


function autoScroll() {
    let currentScrollPosition = projectsContainer.scrollLeft;
    const maxScrollWidth = projectsContainer.scrollWidth - projectsContainer.clientWidth;


    if (currentScrollPosition < maxScrollWidth) {
        projectsContainer.scrollTo({
            left: currentScrollPosition + scrollSpeed,
            behavior: "smooth",
        });
    } else {

        // projectsContainer.scrollTo({
        //     left: 0,
        //     behavior: "smooth",
        // });
    }
}
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                scrollInterval = setInterval(autoScroll, 100);
            } else {
                
                clearInterval(scrollInterval);
            }
        });
    },
    {
        threshold: 0.5, 
    }
);


observer.observe(projectsContainer);

projectsContainer.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
});


projectsContainer.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(autoScroll, 100);
});
