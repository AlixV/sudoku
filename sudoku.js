let numSelected = null;
let tileSelected = null;

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
  // digits :  1 -> 9 with a loop
  for (let i = 1; i <= 9; i++) {
    // Create 9 <div id= i class ="number">
    let number = document.createElement("div");
    // Set the id to the number
    number.id = i;
    // To display it on the page
    number.innerText = i;
    // Add  a class for style
    number.classList.add("number");

    number.addEventListener("click", selectNumber);

    // Add it to the digits div
    document.getElementById("digits").appendChild(number);
  }

  // board :  9 X 9
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let tile = document.createElement("div");
      tile.id = row.toString() + "-" + col.toString();

      if (row == 2 || row == 5) {
        tile.classList.add("horizontal-line");
      }
      if (col == 2 || col == 5) {
        tile.classList.add("vertical-line");
      }

      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber() {
  // "this" refers to the div itself, the one you clicked, "number" of "digits"
  // We want to check to toggle on/off.
  // If numSelected is not equal to null bc we alreday selected one,
  // we remove that class, so it removes the lightskyblue background
  // and we updated it to the new number selected + add background to it.
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

// When we select a number and click on a tile, we want this tile display the number.
// If a number is selected we are going to "this" (refering to the tile itself)
// .innertext  equal to num selected id. So create a click handeler.
// but we don't want to overide/change the number if we select an other one...
// so conditionnal if this not  = to blank string, we want to return. it means exit the function and do nothing else

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }
    this.innerText = numSelected.id;
  }
}
