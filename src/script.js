// Sandbox with DOM-elements

// function changeTheme(theme) { //if vesion
//   return function () {
//     if (theme === "dark") {
//       document.body.style.cssText = `
//         background-color: black;
//         color: white;
//       `;
//     }
//     if (theme === "light") {
//       document.body.style.cssText = `
//         background-color: aqua;
//         color: black;
//       `;
//     } else if (theme === "reset") {
//       document.body.style.removeProperty(`background-color`);
//       document.body.style.removeProperty("color");
//     }
//   };
// }

// document.getElementById("themeHandler1").onclick = changeTheme("dark");
// document.getElementById("themeHandler2").onclick = changeTheme("light"); //Bad practice!
// document.getElementById("themeHandler3").onclick = changeTheme("reset");

const darkBtn = document.querySelector('.darkBtn');
const lightBtn = document.querySelector('.lightBtn');
const resetBtn = document.querySelector('.resetBtn');

const { log } = console;

// darkBtn.addEventListener("click", changeTheme("dark")); //events: click, mouseenter, dblclick, ...and other.
// lightBtn.addEventListener("click", changeTheme("light"));
// resetBtn.addEventListener("click", changeTheme("reset"));

const content = document.querySelector('.content');

content.addEventListener('click', function (event) {  //ДЕЛЕГИРОВАНИЕ
  if (event.target.closest('.darkBtn')) {
    document.body.style.cssText = ` 
    background-color: black; 
    color: white;
    `;
  } else if (event.target.closest('.lightBtn')) {
    document.body.style.cssText = `
    background-color: aqua;
    color: black;
    `;
  } else {
    document.body.style.removeProperty('background-color');
    document.body.style.removeProperty('color');
  }
});

//switch version
// function changeTheme(theme) {
//   return function () {
//     switch (theme) {
//       case "dark": //Change styles in JavaScript it's a BAD prectise! Be careful! If u wanna change styles - using classes.
//         document.body.style.cssText = `
//       background-color: black;
//       color: white;
//     `;
//         break;
//       case "light":
//         document.body.style.cssText = `
//       background-color: aqua;
//       color: black;
//       `;
//         break;
//       case "reset":
//         document.body.style.removeProperty("background-color");
//         document.body.style.removeProperty("color");
//         break;
//     }
//   };
// }

// Sandbox with Objects and arrays

// const myObj = {
//   firstName: "Alexander",
//   lostName: "Semashko",
//   adress: {
//     city: "Minsk",
//     street: "Odoevskogo",
//   },
//   married: true,
// };

// const myArr = [23, 8, 15, 10]

// const initialValue = 0;

// const reducer = myArr.reduce((prevValue, currentValue) => prevValue + currentValue, initialValue)

// console.log(reducer)
