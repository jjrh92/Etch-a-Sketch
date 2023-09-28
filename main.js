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

let gridSize = 16;

function createGrid (val) {

    val = gridSize

    for (let index = 1; index <= 784; index++) {

        let square = document.createElement ("div");
        square.style.height=gridSize+"px";
        square.style.width=gridSize+"px";
        // square.style.border="1px solid red";

        square.addEventListener("mouseover", function handleClick () {


            square.style.backgroundColor=colorInput.value;

        })


        drawContainer.appendChild (square);
        
    }

}

createGrid ()

let controlsContainer = document.createElement ("div");
controlsContainer.setAttribute ("class", "controlsContainer");

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

controlsContainer.appendChild (colorInput);

controlsContainer.appendChild (colorLabel);

body.appendChild (controlsContainer);