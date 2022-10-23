let numSelected = null;
let tileSlected = null;

var errors = 0;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

// to load the game
window.onload = function () {
  setGame();
};

// Create and populate the board with digits in js

function setGame() {
  // digits 1 -> 9 with a loop
  for (let i = 1; i <= 9; i++) {
    // Create 9 <div id= i class ="number">
    let number = document.createElement("div");
    // Set the id to the number
    number.id = i;
    // To display it on the page
    number.innerText = i;
    // Add  a class for style
    number.classList.add("number");

    // Add it to the digits div
    document.getElementById("digits").appendChild(number);
  }
}
