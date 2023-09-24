const dateElement = document.querySelector(".footer_date");
function isDigit(number) {
    return number < 10 ? "0" + number : number;
}
const date = isDigit( new Date().getDate() );
const month = isDigit( new Date().getMonth() + 1 );
const year = new Date().getFullYear();
dateElement.innerHTML = `${date}.${month}.${year}`;