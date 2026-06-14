// aktif bar navigasi
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if ( window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight )
            { current = section.getAttribute("id"); }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current)
            { link.classList.add("active"); }

    });

});


// bayangan di bagian header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");} 
        else { header.classList.remove("scrolled"); }
});

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){ backToTop.style.display = "block"; }
    else{ backToTop.style.display = "none"; }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({ top:0, behavior:"smooth"  });
});

window.addEventListener("scroll", () => {

    console.log(window.scrollY);
    if(window.scrollY > 300){ backToTop.style.display = "block";}
    else{ backToTop.style.display = "none"; }
});


// animasi reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        if(revealTop < windowHeight - revealPoint){
            element.classList.add("active");}
    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// efek mengetik
const text = "Riyan Hermawan";
const typingElement =
document.getElementById("typing-name");

let index = 0;
function typeWriter(){
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index); index++; setTimeout(typeWriter, 120); }
}
typeWriter();

// loading
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader"); loader.style.opacity = "0"; setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});