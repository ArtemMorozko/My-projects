var button = document.querySelector("#changeColorText");
var text = document.querySelector("#textBlack");
button.onclick = function() {
    text.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
});
