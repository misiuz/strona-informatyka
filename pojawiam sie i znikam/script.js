var h1 = document.getElementById("banner")
var text = h1.getAttribute("text")
var predkosc = h1.getAttribute("predkosc")
var licznik = 0

function pisanie(){
    h1.innerHTML += text[licznik]
    licznik++
    if(licznik >= text.length){
    clearInterval(interval)
    }
}

const interval = setInterval(pisanie, predkosc)