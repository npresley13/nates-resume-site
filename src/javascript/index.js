const hoverBox = document.querySelectorAll(".hover-box");

function hoverAction(e) {
    console.log("hover engaged");
}

function hoverRemove() {
    console.log("hover removed");
}

hoverBox.forEach(element =>
    element.addEventListener("mouseover", hoverAction) 
);

hoverBox.forEach(element =>
    element.addEventListener("mouseout", hoverRemove) 
);