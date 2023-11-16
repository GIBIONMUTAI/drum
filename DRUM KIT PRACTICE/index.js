//Detecting button press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i= 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //this.style.color ="purple";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}
//Detecting Keyboeard press
document.addEventListener("keypress",function(event){
    //alert("key was pressed!");
    //console.log(event);
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case"w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case"a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case"s":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case"d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case"j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case"k":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        case"l":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        default:console.log(buttonInnerHTML);


    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +  currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
activeButton.classList.remove("pressed");
    },100)
}