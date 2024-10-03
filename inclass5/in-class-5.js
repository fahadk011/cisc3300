window.addEventListener('load', function() {
    console.log("in-class-4.js loaded!");

    const containerDiv = document.getElementById("container");

    const textNode = document.createTextNode("in class 5");
    containerDiv.appendChild(textNode);

    containerDiv.classList.add("container-color");

    const buttonElement = document.getElementById("event-button");
    buttonElement.addEventListener("click", function() {
        const newDiv = document.createElement("div");
        const newDivText = document.createTextNode("new text");
        newDiv.appendChild(newDivText);
        
        containerDiv.appendChild(newDiv);
    });
});

$(document).ready(function() {
    const $container = $("#container");

    $container.text("in class 5").addClass("container-color");

    $("#event-button").on("click", function() {
        $container.append("<div>new text</div>");
    });
});
