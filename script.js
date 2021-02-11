"use strict";

// artwork: 1
// start: 100
// end: 300
// step 20
// class: box
// Styling: width and height

for (let i = 100; i < 300; i += 20) {
  // create box
  const box1 = document.createElement("div");
  box1.classList.add("box");

  // create/add styling
  box1.style.width = i + "px";
  box1.style.height = i + "px";
  document.querySelector("#artwork1").append(box1);
}

// artwork: 2
// start: 0
// end: 90
// step 10
// class: box
// Styling: rotate

// ..... HOW TO ROTATE?? ....

for (let i = 0; i <= 90; i += 10) {
  //create box
  const box2 = document.createElement("div");
  box2.classList.add("box");

  //create/add styling
  box2.style.transform = `rotate(${i}deg)`;
  document.querySelector("#artwork2").append(box2);
}

// artwork: 3
// start: 0
// end: 200
// step 10
// class: circle
// Styling: width and height

for (let i = 0; i < 200; i += 10) {
  //create box
  const box3 = document.createElement("div");
  box3.classList.add("circle");

  // create/add style
  box3.style.width = i + "px";
  box3.style.height = i + "px";
  document.querySelector("#artwork3").append(box3);
}

// artwork: 4
// start: -90
// end: 90
// step 20
// class: box
// Styling: translate x and y

for (let i = -90; i < 90; i += 20) {
  //create element
  const box4 = document.createElement("div");
  box4.classList.add("box");

  // create/add styling
  box4.style.transform = `translate(${i}px,${i}px)`;

  document.querySelector("#artwork4").append(box4);
}

// artwork: 5
// start: 1
// end: 512
// step *2
// class: circle
// Styling: width and height

for (let i = 1; i < 512; i *= 2) {
  //create element
  const box5 = document.createElement("div");
  box5.classList.add("circle");

  // create/add styling
  box5.style.width = i + "px";
  box5.style.height = i + "px";

  document.querySelector("#artwork5").append(box5);
}

// artwork: 6
// start: -20
// end: 45
// step: 5
// class: circle
// Styling: translate x-50 and rotate*4

for (let i = -20; i < 45; i += 5) {
  //create element
  const box6 = document.createElement("div");
  box6.classList.add("circle");

  // create/add styling
  box6.style.transform = `translate(${i})`;
  box6.style.transform = `rotate(${i}deg)`;

  document.querySelector("#artwork6").append(box6);
}

// artwork: 9
// start: 50
// end: 200
// step: 30
// class: box and circle
// Styling: width and height
