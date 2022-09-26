// JavaScript Document
console.log("hi");


// hamburgermenu icoon veranderen in een kruisje //

const nav = document.querySelector("header nav")
const menuBtn = document.querySelector("header button")


menuBtn.addEventListener("click", openMenu)

function openMenu() {
    console.log("menu gaat open")
    menuBtn.classList.toggle('open');
    nav.classList.toggle('toonMenu')
}



//header veranderen wanneer je scrollt //

const header = document.querySelector("header")

var scrollTrigger = 60 

window.addEventListener("scroll", veranderHeader)

function veranderHeader() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) { //activeert het als je 60px vanaf de top hebt gescrollt//
    console.log("scrolled")
    header.classList.add("background-header")
  } else {
    header.classList.remove("background-header") 
  }
};

//Bron: https://codepen.io/aubort/pen/LeBVzW. Ik snap de code zelf ook.//



//drop-down link menu in footer//

const plusBtn = document.querySelector("footer section img")
const h3 = document.querySelector("footer section h3")
const dropdownMenu = document.querySelector("footer section ul")
let droppedDown = false;

plusBtn.addEventListener("click", dropDown)
h3.addEventListener("click", dropDown)

function dropDown() {
  if(droppedDown == false) {
    plusBtn.src="images/min-btn.svg"
    dropdownMenu.classList.add("dropdown")
    droppedDown = true;
  } else {
    plusBtn.src="images/plus-btn.svg"
    dropdownMenu.classList.remove("dropdown")
    droppedDown = false;
  }
}
