let button = document.querySelectorAll(".drum");

button.forEach(function(el){
    el.addEventListener("click",function(){
        playSound(el.textContent)
    })
})

function playSound(key){
    switch(key){
        case "w":
            let wsound = new Audio("sounds/tom-1.mp3");
            wsound.play();
            break;
        case "a":
            let asound = new Audio("sounds/tom-2.mp3");
            asound.play();
            break;
        case "s":
            let ssound = new Audio("sounds/tom-3.mp3");
            ssound.play();
            break;
        case "d":
            let dsound = new Audio("sounds/tom-4.mp3");
            dsound.play();
            break;
        case "j":
            let jsound = new Audio("sounds/snare.mp3");
            jsound.play();
            break;
        case "k":
            let ksound = new Audio("sounds/crash.mp3");
            ksound.play();
            break;
        case "l":
            let lsound = new Audio("sounds/kick-bass.mp3");
            lsound.play();
            break;
        default:
            console.log(key);
            break;
    }
}

document.addEventListener("keydown", function(event){
    playSound(event.key)
})