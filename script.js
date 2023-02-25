'use strict'

const backgroundColor = document.querySelector("body");
const hexCodeElement = document.querySelector(".color-code");
const changeButton = document.querySelector(".change-color");
const hexCodeParts = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let randomNumber = () => Math.floor(Math.random() * hexCodeParts.length);


changeButton.addEventListener('click', getNewColor);

function getNewColor() {

  let firstPart = hexCodeParts[randomNumber()].toString() + hexCodeParts[randomNumber()].toString();
  let secondPart = hexCodeParts[randomNumber()].toString() + hexCodeParts[randomNumber()].toString();
  let thirdPart = hexCodeParts[randomNumber()].toString() + hexCodeParts[randomNumber()].toString();
  
  function checkValue(value) {
    if (value.length < 2) {
      value += value;
      return value;
    } else return value;
  }

  firstPart = checkValue(firstPart);
  secondPart = checkValue(secondPart);
  thirdPart = checkValue(thirdPart);

  let hexCode = firstPart + secondPart + thirdPart

  hexCodeElement.innerHTML = `#${hexCode}`
  backgroundColor.style.backgroundColor = `#${hexCode}`
  
}

