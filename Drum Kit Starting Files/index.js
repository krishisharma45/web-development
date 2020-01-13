/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
}

//You can do the same thing if you use an anonymous function
//handleClick doesn't have parantheses because we are passing function as value

document.querySelector(".a").addEventListener("click", function () {
  alert("I got clicked!");
});
*/

/* Krishi's Solution
var drum = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

for (var i=0; i<drum.length; i++) {
  document.querySelector(drum[i]).addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked!");
}
*/

//Best solution:
var drum = ["crash.mp3", "kick-bas.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    playAnimation(buttonInnerHTML);
      //this.style.color = "white";
    });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  playAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case 's':
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
    case 'd':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
    case 'j':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case 'k':
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    case 'l':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
    default: console.log();
  }
}

function playAnimation(event) {
  var activeButton = document.querySelector("." + event);
  activeButton.className += " pressed";
  //Angela's code: activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

/* More informaiton on event for Event Listeners:

$0.addEventListener("click", function(event) {
  console.log(event);
});

//displays MouseEvent in console when  you click on the heading in Wikipedia assigned $0
*/

/* Simulating what happens with callback functions, like event listeners:

function anotherAddEventListener(typeOfEvent, callback) {
  //Detect Event Code... let's say p key is pressed for 2 seconds.

  var eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationofKeydown: 2
}

if (evenThatHappened.eventType === typeOfEvent) {
  callback(evenThatHappened);
}
}

Type into console: anotherAddEventListener("keydown", funciton(event) {
console.log(event);
});

to see the object that is output by a callback function.
*/

/* How to pass functions as arguments to other functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  operator(num1, num2);
}

//output: in console, all you do is type console.log(calculator(4, 5, add)); and it outputs 9, for example.
*/
