// Parent element

let body = document.getElementById ("body");

// Header

let header = document.createElement ("header");
header.setAttribute ("class", "header");
let headerLink = document.createElement ("a");
headerLink.innerText = "Etch-a-Sketch";
headerLink.setAttribute ("class","headerLink");
headerLink.setAttribute ("title","Refresh this page");
headerLink.setAttribute ("draggable","false");
headerLink.setAttribute ("href", "/");
header.appendChild (headerLink);
body.appendChild (header);

// Main

let main = document.createElement ("main");
main.setAttribute ("class", "main");

let drawContainer = document.createElement ("div");
drawContainer.setAttribute ("class","drawContainer");

main.appendChild (drawContainer);
body.appendChild (main);