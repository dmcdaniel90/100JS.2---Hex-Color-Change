'use strict'

const backgroundColor = document.querySelector("body");
const hexCodeElement = document.querySelector(".color-code");
const changeButton = document.querySelector(".change-color");
const hexCodeParts = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let randomNumber = () => Math.floor(Math.random() * hexCodeParts.length + 1);


changeButton.addEventListener('click', getNewColor);

function getNewColor() {

  let firstPart = hexCodeParts[randomNumber()] + hexCodeParts[randomNumber()];
  let secondPart = hexCodeParts[randomNumber()] + hexCodeParts[randomNumber()];
  let thirdPart = hexCodeParts[randomNumber()] + hexCodeParts[randomNumber()];

  let hexCode = firstPart + secondPart + thirdPart

  hexCodeElement.innerHTML = `#${hexCode}`
  backgroundColor.style.backgroundColor = `#${hexCode}`
  
}

