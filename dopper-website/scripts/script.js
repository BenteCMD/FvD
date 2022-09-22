// JavaScript Document
console.log("hi");


const nav = document.querySelector("header nav")
const menuBtn = document.querySelector("header button")


menuBtn.addEventListener("click", openMenu)

function openMenu() {
    console.log("menu gaat open")
    menuBtn.classList.toggle('open');
    nav.classList.toggle('toonMenu')
}



const header = document.querySelector("header")

let lastScrollY = window.scrollY //scrollhoogte wanneer je op de top van de pagina bent//

window.addEventListener("scroll", () => {
    console.log("scrolled")

    if(lastScrollY < window.scrollY) { //activeert het alleen als je lager dan de top van de pagina bent//

        header.classList.add("background-header")

    } else {
        header.classList.remove("background-header") 
    }
}) 