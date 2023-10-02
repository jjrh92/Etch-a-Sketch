// Parent element

let body = document.getElementById ("body");

// Header

let header = document.createElement ("header");
header.setAttribute ("class", "header");
let headerLink = document.createElement ("a");
headerLink.innerText = "Etch-a-Sketch";
headerLink.setAttribute ("class","headerLink");
headerLink.setAttribute ("title","Reload this page");
headerLink.setAttribute ("draggable","false");
headerLink.setAttribute ("href", "/");
header.appendChild (headerLink);
body.appendChild (header);

// Main

let main = document.createElement ("main");
main.setAttribute ("class", "main");

let drawContainer = document.createElement ("div");
drawContainer.setAttribute ("class","drawContainer");
drawContainer.setAttribute ("id","drawContainer");

main.appendChild (drawContainer);
body.appendChild (main);

function createGrid (val) {

    let squareSize = 16; // This defines the size of the square in pixels

    val = squareSize;

    drawContainer.style.display = "grid";
    drawContainer.style.gridTemplateColumns = `repeat(${val}, 1fr)`
    drawContainer.style.gridTemplateRows = `repeat(${val}, 1fr)`
    drawContainer.style.height = squareSize*2;
    drawContainer.style.width = squareSize*2;

    for (let index = 1; index <= val*val; index++) {

        let square = document.createElement ("div");
        square.setAttribute ("class","square");
        square.style.height = squareSize+"px";
        square.style.width = squareSize+"px";
        square.style.border = "1px solid red";

        square.addEventListener("mouseover", function handleMouse () {


            square.style.backgroundColor=colorInput.value;

        })


        drawContainer.appendChild (square);
        
    }

    let colorContainer = document.createElement ("div");
    colorContainer.setAttribute ("class", "colorContainer");
    let colorInput = document.createElement ("input");
    colorInput.setAttribute ("class", "colorInput");
    let colorLabel = document.createElement ("label");
    colorLabel.setAttribute ("for", "colorInput")
    colorLabel.setAttribute ("class", "colorLabel");
    colorLabel.innerText = "Pick a color"
    let startingColor = "#002AFF";
    colorInput.value = startingColor;
    colorInput.setAttribute ("id", "colorInput");
    colorInput.setAttribute ("type", "color");
    colorContainer.appendChild (colorInput);
    colorContainer.appendChild (colorLabel);
    body.appendChild (colorContainer);

    // Size Input
    let sizeContainer = document.createElement ("div");
    sizeContainer.setAttribute ("class", "colorContainer");
    let sizeInput = document.createElement ("input");
    sizeInput.setAttribute ("class", "sizeInput");
    let sizeLabel = document.createElement ("label");
    sizeLabel.setAttribute ("for", "sizeInput")
    sizeLabel.setAttribute ("class", "sizeLabel");
    sizeLabel.innerText = "Canvas Size"

    sizeInput.setAttribute ("id", "sizeInput");
    sizeInput.setAttribute ("type", "range");
    sizeInput.setAttribute ("step", "2")

    sizeInput.setAttribute ("min", "16")
    sizeInput.setAttribute ("max", "22")

    sizeInput.addEventListener("input", function setCurrentSize () {

        let currentSize = sizeInput.value

        sizeInput.setAttribute ("value", currentSize)
        console.log (currentSize)
        return currentSize

    })

    sizeInput.setAttribute ("title", sizeInput.value);
    sizeContainer.appendChild (sizeInput);
    sizeContainer.appendChild (sizeLabel);
    body.appendChild (sizeContainer);

}

createGrid ()