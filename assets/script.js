//Array Slides contenant nos images et sous-titres
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let banner = document.querySelector(".banner-img");
let subtitle = document.querySelector("#banner > p");
let imgLength = slides.length;

for (let i = 0; i < imgLength; i++) {
  dots.innerHTML = dots.innerHTML + "<span class='dot'></span>";
}
let dot = document.querySelectorAll(".dot");

banner.src = "./assets/images/slideshow/" + slides[0].image;
subtitle.innerHTML = slides[0].tagLine;
dot[0].classList.add("dot_selected");
