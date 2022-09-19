const hoverBox = document.querySelectorAll(".hover-box");

function hoverAction() {
    console.log("function fired");
}

hoverBox.forEach(element =>
    element.addEventListener("mouseover", hoverAction) 
);
