function drawBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let ammount = size * size;
  for (let i = 0; i < ammount; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "whitesmoke";
    board.insertAdjacentElement("beforeend", square);
  }

  let rangeLabel = document.querySelector("#rangeLabel");
  rangeLabel.innerHTML = "Size: " + size + "x" + size;

  function resetSquare() {
    if (resetInput.checked === true) {
      let board = document.querySelector(".board");
      let squares = board.querySelectorAll("div");
      squares.forEach((div) => {
        div.style.backgroundColor = "whitesmoke";
      });
      window.location.reload();
      console.log("♻️...");
    }
  }
  let resetInput = document.querySelector(".resetInput");
  resetInput.addEventListener("click", resetSquare);
}

drawBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    drawBoard(input);
  } else {
    alert("Invalid range value");
    window.location.reload();
  }
}

function colorSquare() {
  let colorInput = document.querySelector(".colorInput");

  if (eraserInput.checked === true) {
    this.style.backgroundColor = "whitesmoke";
    console.log("🗑️...");
  } else if (rainbowInput.checked === true) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log("🌈...");
  } else {
    this.style.backgroundColor = colorInput.value;
    console.log("🎨...");
  }
}
