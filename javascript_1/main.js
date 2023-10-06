var button = document.querySelector("#changeColorText");
var text = document.querySelector("#textBlack");
button.onclick = function() {
    text.classList.toggle("textGreen");
};
