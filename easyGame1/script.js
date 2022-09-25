var character = document.getElementById("character")
var game = document.getElementById("game")
var interval; 
var both = 0;
var counter  = 0;
var currentBlocks = []
var score = 0
var blocks


function moveLeft(){ // function go to left
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0) {
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){ // function go to right
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}
document.addEventListener("keydown", event =>{
    if(both == 0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1)
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1)
        }
    }
});

document.addEventListener("keyup", event =>{
    clearInterval(interval)
    both = 0;
})

document.querySelector("svg").addEventListener("click", event =>{
    blocks = setInterval(Playing, 1);
    document.querySelector("svg").style = "display: none;"
})
    function Playing(){
    var blockLast = document.getElementById("block"+(counter-1))
    var holeLast = document.getElementById("hole" + (counter-1))
    if(counter>0){
        var topBlockLast = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var topHoleLast = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(topBlockLast < 400 || counter == 0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block")
        hole.setAttribute("class", "hole")
        block.setAttribute("id", "block" + counter)
        hole.setAttribute("id", "hole" + counter)
        block.style.top =topBlockLast+ 100 +"px"
        hole.style.top = topHoleLast+ 100 +"px"
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole)
        currentBlocks.push(counter)
        counter++;  
    }
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft  = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    if(characterTop <= 0){
        alert('Game Over, Score: '+ (counter-9));
        clearInterval(blocks);
        location.reload();
    }
    for(var i = 0; i < currentBlocks.length; i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);  
        let ihole = document.getElementById("hole"+current)
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        if(score <= 10){
            iblock.style.top = iblockTop - 0.5 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }else if(score > 10 && score <= 30){
            iblock.style.top = iblockTop - 0.6 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }else if(score > 30 && score <= 50){
            iblock.style.top = iblockTop - 0.7 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }else if(score > 50 && score <= 70){
            iblock.style.top = iblockTop - 0.8 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }else if(score > 70 && score <= 100){
            iblock.style.top = iblockTop - 0.9  + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }else if(score > 100){
            iblock.style.top = iblockTop - 1.0  + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
        }
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove()
            ihole.remove();
        }
        if(iblockTop - 20 < characterTop && iblockTop > characterTop){
            drop++;
            if(iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft){
                drop = 0;
            }
        }
        
    }
    if(drop == 0){
        if(characterTop < 480)
        character.style.top = characterTop + 2 + "px";
    }else{
        character.style.top = characterTop - 0.5 + "px";
    }
    
// aside


for(var i = 0; i < currentBlocks.length; i++){
    let current = currentBlocks[i];
    let iblock = document.getElementById("block"+current);  
    let iblockTop = parseInt(window.getComputedStyle(iblock).getPropertyValue("top"));

    if(iblockTop<characterTop){
        score=current-3
    }
}

    document.querySelector("aside").innerHTML = score
}
