// JavaScript Document
console.log("hi")


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

var scrollTrigger = 50 

window.addEventListener("scroll", veranderHeader)

function veranderHeader() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) { //activeert het als je 60px vanaf de top hebt gescrollt//
    console.log("scrolled")
    header.classList.add("background-header")
  } else {
    header.classList.remove("background-header") 
  }
}

//Bron: https://codepen.io/aubort/pen/LeBVzW. Ik snap de code zelf ook.//



//laserstralen uitprobeersel//

var dopperfles = document.querySelector(".home main article:nth-of-type(3) img:first-of-type")
var laseroog = document.querySelector(".home main article:nth-of-type(3) div span:first-of-type")
var laseroog2 = document.querySelector(".home main article:nth-of-type(3) div span:nth-of-type(2)")
var laserstraal = document.querySelector(".home main article:nth-of-type(3) div span:nth-of-type(3)")
var laserstraal2 = document.querySelector(".home main article:nth-of-type(3) div span:nth-of-type(4)")
var plasticfles = document.querySelector(".home main article:nth-of-type(3) img:last-of-type")

//de eventlistener werkt maar 1x (weet niet waarom) dus heb ik maar toggle gebruikt, 
//zodat je de pagina niet steeds hoeft te refreshen.

document.addEventListener("keypress", function(event) {  // bron: https://stackoverflow.com/questions/62315327/how-to-detect-if-a-certain-key-is-being-pressed
  if (event.key === "l") {
    
    laseroog.classList.toggle("laserogen")  
    laseroog2.classList.toggle("laserogen")
    laserstraal.classList.toggle("laserstralen")
    laserstraal2.classList.toggle("laserstralen")
    dopperfles.classList.toggle("charge")
    plasticfles.classList.toggle("attacked")
  }

})



//drop-down link menu in footer//

const plusBtn = document.querySelector("footer section img");
const h3 = document.querySelector("footer section h3")
const dropdownMenu = document.querySelector("footer section ul")
let droppedDown = false;

plusBtn.addEventListener("click", dropDown)
h3.addEventListener("click", dropDown)

function dropDown() {
  if(droppedDown === false) {
    plusBtn.src="images/min-btn.svg"
    dropdownMenu.classList.add("dropdown")
    droppedDown = true;
  } else {
    plusBtn.src="images/plus-btn.svg"
    dropdownMenu.classList.remove("dropdown")
    droppedDown = false;
  }
}



//winkelmandje animatie//

var cartBtn = document.querySelector(".shop main section ul li button") 
var product = document.querySelector(".shop main section ul li img")


function voegToeAanWinkelwagen() {

  console.log("added")

  let winkelwagenAantal = document.querySelector("header span")
  let currentAmount = winkelwagenAantal.innerHTML
  /* dat is een string(tekst) - dus even omzetten naar een getal, want anders wordt het: 01 011 0111*/
  currentAmount = parseInt(currentAmount)

  /* 1 bij het huisige aantal optellen */
  let newAmount = currentAmount + 1

  /* tenslotte het nieuwe aantal in de HTML zetten */
  winkelwagenAantal.innerHTML = newAmount

  /*class met animatie toevoegen*/
  winkelwagenAantal.classList.add("cart-animatie")

  product.classList.add("product-toegevoegd")

}


cartBtn.addEventListener("click", voegToeAanWinkelwagen)