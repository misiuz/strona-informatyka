// var h1 = document.getElementById("banner")
// var text = h1.getAttribute("text")
// var predkosc = h1.getAttribute("predkosc")
// var licznik = 0

// function pisanie(){
//     h1.innerHTML += text[licznik]
//     licznik++
//     if(licznik >= text.length){
//     clearInterval(interval)
//     }
// }

// const interval = setInterval(pisanie, predkosc)


var h1 = document.getElementById("banner")
var wybor = h1.getAttribute("zrodlo").includes("tablica")
var text = h1.getAttribute("text")
var predkosc = h1.getAttribute("predkosc")
var licznik = 0
var letter = 0

function tablica(){
    let actWord = jezyki[licznik%jezyki.length]
    actWord = actWord.charAt(0).toUpperCase()+actWord.slice(1);
    licznik++
    wyswietl(actWord,0)
}

function wyswietl(slowo,letter){
    h1.innerHTML += slowo[letter]
    letter++
    if(letter<slowo.length){
        setTimeout(wyswietl, predkosc, slowo, letter)
    }
    else if(letter>=slowo.length && wybor){
        setTimeout(backspace, 2000, slowo)
    }
}

function backspace(slowo) {
    slowo = slowo.slice(0, slowo.length-1)
    h1.innerHTML = "&#x200E;"+slowo
    if(slowo.length>0){
        setTimeout(backspace, 100, slowo)
    }
    else{
        setTimeout(tablica, 1000)
    }
}

if(wybor) {tablica()}
else if(!wybor) {wyswietl(text,0)}