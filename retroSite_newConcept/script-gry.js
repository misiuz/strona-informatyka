function fallingGame (){
    document.querySelector("main").classList.add("blur")
    document.querySelector(".gameBox").classList.add("visible")
}

function returnToMain (){
    document.querySelector("main").classList.remove("blur")
    document.querySelector(".gameBox").classList.remove("visible")
}